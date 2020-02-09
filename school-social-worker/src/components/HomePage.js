import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="top-nav">
        <img
          alt=""
          src="https://www.ghanamakeadifference.org/uploads/2/9/4/1/29418375/1481814865.png"
        />
      </div>
      <div className="home-container">
        <h1>International Education Connection</h1>

        <div className="button-container">
          <Link to="/register">Register </Link>
          <Link to="/login">Sign In </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
