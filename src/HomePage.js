// My dashboard, shows the moodform and moodlist

import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc, query, where, onSnapshot, orderBy, deleteDoc, doc } from "firebase/firestore";
import { moodOptions } from "../data";

const Dashboard = () => {
  const [moods, setMoods] = useState([]);
  const [note, setNote] = useState("");
  const [selectedMood, setSelectedMood] = useState("Happy");
  const user = auth.currentUser;

  // READ: Fetch moods from Firebase
  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, "moods"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMoods(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [user]);

  // CREATE: Add a new mood
  const addMood = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "moods"), {
      userId: user.uid,
      mood: selectedMood,
      note: note,
      createdAt: new Date()
    });
    setNote("");
  };

  // DELETE: Remove an entry
  const deleteMood = async (id) => {
    await deleteDoc(doc(db, "moods", id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>How are you feeling today?</h2>
      <form onSubmit={addMood} style={{ marginBottom: "30px" }}>
        <select value={selectedMood} onChange={(e) => setSelectedMood(e.target.value)}>
          {moodOptions.map(opt => <option key={opt.label} value={opt.label}>{opt.emoji} {opt.label}</option>)}
        </select>
        <input 
          placeholder="Add a note..." 
          value={note} 
          onChange={(e) => setNote(e.target.value)} 
          required 
        />
        <button type="submit">Log Mood</button>
      </form>

      <h3>Your History</h3>
      {moods.map((m) => (
        <div key={m.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "5px 0" }}>
          <strong>{m.mood}</strong>: {m.note} 
          <button onClick={() => deleteMood(m.id)} style={{ marginLeft: "10px", color: "red" }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
