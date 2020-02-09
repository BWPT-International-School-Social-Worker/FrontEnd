import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing";
import Navigation from "./Navigation";
import PrivateRoute from "./PrivetRoute";

function Routes() {
  return (
    <div>
      <Router>
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