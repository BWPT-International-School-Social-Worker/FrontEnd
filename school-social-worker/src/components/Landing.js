import React from "react";
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "./MainNav.scss"

function Landing() {
  return (
    <Router>
      <div>
        <div className="nav-container">
        <nav >
          <li className="nav-link">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-link">
            <Link to="/register">Register</Link>
          </li>
        </nav></div>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Landing;