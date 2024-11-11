import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        username,
        email,
        password,
      });
      // Show success toast
      toast.success(response.data.message || "User created successfully");
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      // Show error toast
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="center-wrapper">
      <div className="sign-up-container">
        <h2>Sign Up Page</h2>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
