import React, { useState, useEffect } from "react";
// Use ../ to step out of 'pages' and into 'firebase'
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


import MoodForm from "../components/MoodForm";
import MoodList from "../components/MoodList";

const Dashboard = () => {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);


  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

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

  // CREATE
  const handleAddMood = async (newEntry) => {
    try {
      await addDoc(collection(db, "moods"), {
        ...newEntry,
        userId: user.uid,
        createdAt: new Date() // Best practice to add timestamp here
      });
    } catch (error) {
      console.error("Error adding mood:", error);
    }
  };

  // DELETE
  const handleDeleteMood = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await deleteDoc(doc(db, "moods", id));
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
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
    cursor: "pointer",
    fontWeight: "bold"
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px"
  }
};

export default Dashboard;