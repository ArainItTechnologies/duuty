import React from "react";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>403 - Unauthorized</h1>
      <p style={styles.message}>You do not have permission to view this page.</p>
      <div style={styles.buttonContainer}>
        <button onClick={handleGoBack} style={styles.button}>
          Go Back
        </button>
        <button onClick={handleGoHome} style={styles.button}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    outline: "none",
  },
};

export default UnauthorizedPage;
