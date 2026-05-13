// broken links or mustyped urls

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.title}>Oops! Page Not Found</h2>
      <p style={styles.text}>
        It looks like you've wandered off the emotional path. 
        Let’s get you back to your dashboard.
      </p>
      <Link to="/" style={styles.button}>
        Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    textAlign: "center",
    backgroundColor: "#f9f9fb",
    color: "#2d3748",
    padding: "0 20px"
  },
  errorCode: {
    fontSize: "6rem",
    margin: 0,
    color: "#a8dadc" // Using your theme color
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px"
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "30px",
    color: "#4a5568"
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#457b9d",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "background 0.3s ease"
  }
};

export default NotFound;
