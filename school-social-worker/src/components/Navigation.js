import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StudentList from "./StudentList";
import AddStudent from "./AddStudentForm";
import EditStudentForm from "./EditStudentForm";
import Student from "./Student";
import "./MainNav.scss";

function Routes() {
  return (
    
      <div>
      <Router>
        <div className = "nav-container">
          <img
            alt=""
            src="https://www.ghanamakeadifference.org/uploads/2/9/4/1/29418375/1481814865.png"
          />
          <ul>
            <li>
              <Link to="/students">My Students</Link>
            </li>
            <li>
              <Link to="/newstudent">Add Student</Link>
            </li>
            <li>
              <Link to="/">LogOut</Link>
            </li>
          </ul>
          </div>
          
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
       
      </Router>
    </div>
  );
}

export default Routes;
