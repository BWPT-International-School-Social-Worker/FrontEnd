import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StudentList from "./StudentList";
import AddStudent from "./AddStudentForm";
import EditStudentForm from "./EditStudentForm";
import Student from "./Student";

function Routes() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <li>
              <Link to="/students">My Students</Link>
            </li>
            <li>
              <Link to="/newstudent">Add Student</Link>
            </li>
          </nav>
          <Switch>
            <Route path="/students">
              <StudentList></StudentList>
            </Route>
            <Route path="/newstudent">
              <AddStudent></AddStudent>
            </Route>
            <Route
              path="/edit/:id"
              render={props => {
                return <EditStudentForm {...props} />;
              }}
            ></Route>
            <Route
              path="/student/:id"
              render={props => {
                return <Student {...props} />;
              }}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;