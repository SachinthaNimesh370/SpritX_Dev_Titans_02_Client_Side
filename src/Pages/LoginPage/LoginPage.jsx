import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password!");
      return;
    }
    
    toast.success("Login Successful!", { position: "bottom-right" });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>

        <div>
          <label className="login-label">Username</label>
          <input
            type="text"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="login-label">Password</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">Login</button>

        <p className="signup-link">
          Don't have an account? <Link to="/SignUpPage">Sign up here</Link>
        </p>
      </form>
      
      <ToastContainer /> {/* Add ToastContainer here to display the toast messages */}
    </div>
  );
}

export default LoginPage;
