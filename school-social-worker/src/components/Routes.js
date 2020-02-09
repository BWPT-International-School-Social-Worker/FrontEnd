import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing";

function Routes() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Landing></Landing>
        </Route>
      </Router>
    </div>
  );
}

export default Routes;
