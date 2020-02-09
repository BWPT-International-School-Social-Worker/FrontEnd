import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing";
import Navigation from "./Navigation";
import PrivateRoute from "./PrivetRoute";
import StudentInfo from "./StudentInfo";

function Routes() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Landing></Landing>
        </Route>
        <Route
          exact path={`/student-info/:id`}
          render={props => <StudentInfo {...props} />}
        />
        <PrivateRoute exact path="/home">
          <Navigation />
        </PrivateRoute>
      </Router>
    </div>
  );
}

export default Routes;
