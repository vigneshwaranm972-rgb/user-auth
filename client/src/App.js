import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
  const [userEmail, setUserEmail] = useState(null); // track logged-in user

  const handleLogin = (email) => {
    setUserEmail(email); // save logged-in user
  };

  const handleLogout = () => {
    setUserEmail(null); // logout
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/login" />}
        />

        {/* Login page */}
        <Route
          path="/login"
          element={
            userEmail ? ( <Navigate to="/dashboard" /> ): ( <Login onLogin={handleLogin} />)
          }
        />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Protected dashboard */}
        <Route
          path="/dashboard"
          element={
            userEmail ?  ( <Dashboard userEmail={userEmail} onLogout={handleLogout} />) : ( <Navigate to="/login" /> )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
