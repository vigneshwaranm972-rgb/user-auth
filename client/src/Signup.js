// src/Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateSignup } from "./SignupValidation"; // <-- Import named export
import logo from './services/logo.png';
const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f0f2f5", padding: "20px" },
  card: { background: "#fff", borderRadius: "15px", padding: "40px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", textAlign: "center", maxWidth: "400px", width: "100%" },
  logo: { marginBottom: "20px", fontSize: "30px", fontWeight: "bold", color: "#4a67ff" },
  title: { marginBottom: "30px", fontSize: "28px", fontWeight: "700" },
  error: { backgroundColor: "#fee2e2", color: "#b91c1c", padding: "10px", borderRadius: "8px", marginBottom: "15px", fontSize: "14px", fontWeight: "500" },
  input: { width: "100%", padding: "12px 15px", margin: "10px 0", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px", boxSizing: "border-box" },
  buttonSignup: { width: "100%", padding: "15px", margin: "20px 0 10px 0", border: "none", borderRadius: "10px", background: "#4a67ff", color: "white", fontSize: "18px", fontWeight: "600", cursor: "pointer", transition: "background 0.3s" },
  bottomText: { fontSize: "14px", color: "#666", marginTop: "15px" },
  linkLogin: { color: "#4a67ff", textDecoration: "none", fontWeight: "bold", marginLeft: "4px" },
};

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { valid, message } = validateSignup(name, email, password, confirm); // <-- Validate here

    if (!valid) {
      setError(message);
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Signup successful!");
      // Reset fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirm("");
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
         <div style={styles.logo}>
                  <img src={logo} alt="logo" style={{width: "100px", borderRadius: "40px"}}/>
                </div>
        <h2 style={styles.title}>Create Your Account</h2>

        {error && <div style={styles.error}>{error}</div>}

        <form method= "POST" onSubmit={handleSubmit}>
          <input style={styles.input} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input style={styles.input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input style={styles.input} type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
          <button type="submit" style={styles.buttonSignup} disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p style={styles.bottomText}>
          Already have an account?
          <Link to="/login" style={styles.linkLogin}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
