import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      
      <div className="home-container">
        <h1>International Education Connection</h1>

        <div className="button-container">
          <Link to="/register">Get Started </Link>
          
        </div>
      </div>
    </div>
  );
}

export default HomePage;
