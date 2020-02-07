import React from "react"
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";
import StudentList from "../studentList/StudentList"
import AddStudent from "../addStudent/AddStudentForm"

function Routes() {
  return (
    <div>
       <Router>
      <div>
        <ul>
          <li>
            <Link to="/students">My Students</Link>
          </li>
          <li>
            <Link to="/newstudent">AddStudent</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/students">
            <StudentList></StudentList>
          </Route>
          <Route path="/newstudents">
            <AddStudent></AddStudent>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default Routes;