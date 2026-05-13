// forms and user input

import React, { useState } from "react";
import { moodOptions } from "../data/data";

const MoodForm = ({ onAddMood }) => {
  const [note, setNote] = useState("");
  const [selectedMood, setSelectedMood] = useState("Happy");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!note.trim()) return;

    // Passing data up to the parent (Dashboard)
    onAddMood({
      mood: selectedMood,
      note: note,
      createdAt: new Date()
    });

    // Reset form fields
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <label style={styles.label}>How are you feeling?</label>
        <select 
          value={selectedMood} 
          onChange={(e) => setSelectedMood(e.target.value)}
          style={styles.select}
        >
          {moodOptions.map(opt => (
            <option key={opt.label} value={opt.label}>
              {opt.emoji} {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Notes</label>
        <textarea 
          placeholder="What's on your mind?" 
          value={note} 
          onChange={(e) => setNote(e.target.value)} 
          required 
          style={styles.textarea}
        />
      </div>

      <button type="submit" style={styles.button}>Log Entry</button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "30px"
  },
  inputGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column"
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#4a5568"
  },
  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd"
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    minHeight: "80px",
    fontFamily: "inherit"
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#a8dadc",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default MoodForm;
