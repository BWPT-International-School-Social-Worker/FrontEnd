import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "../landing/Landing";
import Navigation from "../nav/Navigation";
import PrivateRoute from "./PrivetRoute";

function Routes() {
  return (
    <div>
      <Router>
        routes
        <Route exact path="/">
          <Landing></Landing>
        </Route>
        <PrivateRoute exact path="/home">
          <Navigation></Navigation>
        </PrivateRoute>
      </Router>
    </div>
  );
}

export default Routes;
