//landing page

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Track Your Mood, <br />Understand Your Mind.</h1>
        <p style={styles.subtitle}>
          A simple space to record your daily emotions, notice patterns, 
          and prioritize your mental well-being.
        </p>
        <div style={styles.buttonGroup}>
          <Link to="/login" style={styles.primaryButton}>Get Started</Link>
          <Link to="/dashboard" style={styles.secondaryButton}>View Dashboard</Link>
        </div>
      </div>
      
      <div style={styles.features}>
        <div style={styles.featureCard}>
          <h3>Daily Logs</h3>
          <p>Quickly record how you feel with just a few clicks.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>Add Notes</h3>
          <p>Keep a short journal entry for every mood logged.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>History</h3>
          <p>Look back at your journey and see your emotional growth.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#f0f4f8", // Calming light blue-grey
    minHeight: "90vh",
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: "50px",
  },
  title: {
    fontSize: "3rem",
    color: "#2d3748",
    lineHeight: "1.2",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#4a5568",
    margin: "20px 0",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  primaryButton: {
    padding: "12px 24px",
    backgroundColor: "#a8dadc",
    color: "#1d3557",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  secondaryButton: {
    padding: "12px 24px",
    border: "2px solid #a8dadc",
    color: "#1d3557",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  featureCard: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  }
};

export default HomePage;
