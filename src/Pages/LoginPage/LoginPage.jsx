import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please enter both username and password!", { position: "bottom-right" });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/login", {
        username,
        password,
      });

      const { token, role, message } = response.data;

      // Store token and role in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      toast.success(message, { position: "bottom-right" });

      // Redirect user based on role after a short delay
      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin-dashboard"); // Change this to your admin page
          console.log(role);
        } else {
          navigate("/user-dashboard"); // Change this to your user page
          console.log(role);
        }
      }, 2000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed!";
      toast.error(errorMessage, { position: "bottom-right" });
    }
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

      <ToastContainer />
    </div>
  );
}

export default LoginPage;
