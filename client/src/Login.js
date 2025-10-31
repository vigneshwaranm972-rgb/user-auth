import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './services/logo.png';
import { useNavigate } from "react-router-dom";

function Login  ({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const validateLogin = (email, password) => {
     if (email === "ddhanushkumar809@gmail.com" && password === "123456") {
    return { valid: true, message: "Login successful!" };
    }
    return { valid: false, message: "Login failed. Please check your credentials." };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
   
      const { valid, message } = validateLogin(email, password);

      if (valid) {
        onLogin(email);
        navigate('/dashboard');
      } else {
        setError(message);
      }

      setLoading(false);
   
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* --- Logo --- */}
        <div style={styles.logo}>
          <img src={logo} alt="logo" style={{width: "100px", borderRadius: "40px"}}/>
        </div>

        {/* --- Title --- */}
        <h2 style={styles.title}>Welcome Back</h2>

        {/* --- Error message --- */}
        {error && <div style={styles.error}>{error}</div>}

        {/* --- Form --- */}
        <form  onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            style={styles.loginButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        {/* --- Forgot password --- */}
        <Link to="/forgot-password" style={styles.forgotLink}>
          Forgot Password?
        </Link>

        {/* --- Sign up link --- */}
        <p style={styles.signupText}>
          Don’t have an account?
          <Link to="/Signup" style={styles.signupLink}>
            Sign up
          </Link>
        </p>

        {/* --- Social buttons --- */}
        <div style={styles.socialContainer}>
          <button style={{ ...styles.socialButton, ...styles.google }}>
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              style={{ width: "18px", marginRight: "8px" }}
            />
            Google
          </button>
          <button style={{ ...styles.socialButton, ...styles.facebook }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
              alt="Facebook"
              style={{ width: "18px", marginRight: "8px" }}
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Styling ---
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "45px 40px",
    width: "100%",
    maxWidth: "380px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "40px",
    color: "#4a67ff",
    marginBottom: "10px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "25px",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  loginButton: {
    width: "100%",
    padding: "13px",
    backgroundColor: "#4a67ff",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.3s",
  },
  forgotLink: {
    display: "block",
    fontSize: "14px",
    color: "#4a67ff",
    marginTop: "10px",
    textDecoration: "none",
  },
  signupText: {
    fontSize: "15px",
    color: "#333",
    marginTop: "15px",
  },
  signupLink: {
    color: "#4a67ff",
    textDecoration: "none",
    fontWeight: "600",
    marginLeft: "4px",
  },
  socialContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "25px",
  },
  socialButton: {
    flex: 1,
    padding: "12px 10px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  google: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    color: "#333",
  },
  facebook: {
    backgroundColor: "#4267B2",
    color: "#fff",
    border: "none",
  },
  error: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "15px",
    fontWeight: "500",
    fontSize: "14px",
  },
};

export default Login;
