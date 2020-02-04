import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>International Education Connection</h1>

      <div className="button-container">
        <Link to="/register">Register </Link>
        <Link to="/sign-in">Sign In </Link>
        
      </div>
    </div>
  );
}

export default Home;
