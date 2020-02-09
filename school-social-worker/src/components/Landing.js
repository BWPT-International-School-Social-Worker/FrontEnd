import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "./MainNav.scss";
import HomePage from "./HomePage";

function Landing() {
  return (
    <Router>
      <div>
        <div className="nav-container">
        <img
          alt=""
          src="https://www.ghanamakeadifference.org/uploads/2/9/4/1/29418375/1481814865.png"
        />
          <nav>
            <li className="nav-link">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-link">
              <Link to="/register">Register</Link>
            </li>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Landing;
