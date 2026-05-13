// cards for mood entries, delete button

import React from "react";

const MoodItem = ({ entry, onDelete }) => {
  // Format the date for better readability
  const dateString = new Date(entry.createdAt?.seconds * 1000).toLocaleDateString();

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.moodLabel}>{entry.mood}</span>
        <span style={styles.date}>{dateString}</span>
      </div>
      <p style={styles.note}>{entry.note}</p>
      <button 
        onClick={() => onDelete(entry.id)} 
        style={styles.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    borderLeft: "5px solid #a8dadc" // Theme color accent
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
  },
  moodLabel: {
    fontWeight: "bold",
    fontSize: "1.1rem"
  },
  date: {
    fontSize: "0.85rem",
    color: "#718096"
  },
  note: {
    color: "#4a5568",
    margin: "0 0 10px 0"
  },
  deleteBtn: {
    background: "none",
    border: "none",
    color: "#e63946",
    cursor: "pointer",
    fontSize: "0.85rem",
    padding: 0,
    textDecoration: "underline"
  }
};

export default MoodItem;
