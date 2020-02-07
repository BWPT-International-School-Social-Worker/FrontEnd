import React from "react";
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";

function Landing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
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
