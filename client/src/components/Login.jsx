import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login", { email, password });
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      console.log("Response:", response);
      toast.success(response.data.message || "Logged in successfully");
      navigate("/home");
    } catch (err) {
      console.log("Error:", err);
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="center-wrapper">
      <div className="sign-up-container">
        <h2>Login Page</h2>
        <form className="sign-up-form" onSubmit={handleSubmit}>
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

          <button type="submit">Log In</button>
          <Link to="/forgot-password">Forgot Password?</Link>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
