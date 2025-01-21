import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button style={styles.button} onClick={() => navigate("/")}>
        Go Back to Home
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  message: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default NotFound;
