// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
          <Link to="/">MERN auth app</Link>
        </h1>

        <div className="header-buttons">
          <Link to="/signup" className="header-button signup">
            Sign Up
          </Link>
          <Link to="/login" className="header-button login">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
