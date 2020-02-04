import React from "react";
import "./MainNav.scss";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className="nav-container">
      <img
        alt=""
        src="https://www.ghanamakeadifference.org/uploads/2/9/4/1/29418375/1481814865.png"
      />
      <nav>
        <div className="side-nav">
          <Link to="/">Home</Link>
          <Link to = "/register">Register</Link>
          <Link to = "/student-list">Login</Link>
        </div>
        <div className="login-container">
    <form >
      <input type="text" placeholder="Username" name="username"/>
      <input type="text" placeholder="Password" name="psw"/>
      <Link to = "/"><button type="submit">Login</button></Link>
    </form>
  </div>
      </nav>
    </div>
  );
}

export default MainNav;
