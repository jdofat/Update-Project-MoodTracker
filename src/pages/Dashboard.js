// added logout and logged-in user check

import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  deleteDoc, 
  doc 
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Importing our reusable components
import MoodForm from "../components/MoodForm";
import MoodList from "../components/MoodList";

const Dashboard = () => {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;
  const navigate = useNavigate();

  // Redirect if not logged in (Requirement: Conditional Rendering/Auth)
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // READ: Real-time listener for mood entries
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "moods"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const moodData = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      }));
      setMoods(moodData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  // CREATE: Function passed to MoodForm as a prop
  const handleAddMood = async (newEntry) => {
    try {
      await addDoc(collection(db, "moods"), {
        ...newEntry,
        userId: user.uid
      });
    } catch (error) {
      console.error("Error adding mood:", error);
    }
  };

  // DELETE: Function passed to MoodList -> MoodItem as a prop
  const handleDeleteMood = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      await deleteDoc(doc(db, "moods", id));
    }
  };

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading your history...</p>;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1>Welcome, {user?.email?.split('@')[0]}</h1>
          <p>Your personal mood tracking dashboard.</p>
        </div>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <MoodForm onAddMood={handleAddMood} />
        </section>

        <section style={styles.section}>
          <h3>Your Mood History</h3>
          <MoodList moods={moods} onDeleteMood={handleDeleteMood} />
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: "20px"
  },
  logoutBtn: {
    padding: "8px 16px",
    backgroundColor: "#f1faee",
    color: "#e63946",
    border: "1px solid #e63946",
    borderRadius: "6px",
    cursor: "pointer"
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px"
  }
};

export default Dashboard;
