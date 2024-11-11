import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <main className="main-section">
        <div className="content-wrapper">
          <div className="content-flex">
            <div className="text-section">
              <h1 className="title">Welcome to MERN Auth Application</h1>
              <p className="subtitle">
                A perfected user authentication application using the MERN Stack
                + Redux. Hit the button and enjoy it.
              </p>
            </div>
            <div className="image-section">
              <img
                src="/img1.jpg"
                alt="Illustration"
                className="illustration"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
