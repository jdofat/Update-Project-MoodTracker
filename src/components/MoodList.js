//renders moods with .map()

import React from "react";
import MoodItem from "./MoodItem";

const MoodList = ({ moods, onDeleteMood }) => {
  if (moods.length === 0) {
    return (
      <div style={styles.empty}>
        <p>No moods logged yet. How are you feeling today?</p>
      </div>
    );
  }

  return (
    <div style={styles.listContainer}>
      {moods.map((entry) => (
        <MoodItem 
          key={entry.id} 
          entry={entry} 
          onDelete={onDeleteMood} 
        />
      ))}
    </div>
  );
};

const styles = {
  listContainer: {
    marginTop: "20px"
  },
  empty: {
    textAlign: "center",
    padding: "40px",
    color: "#718096",
    backgroundColor: "#edf2f7",
    borderRadius: "8px"
  }
};

export default MoodList;
