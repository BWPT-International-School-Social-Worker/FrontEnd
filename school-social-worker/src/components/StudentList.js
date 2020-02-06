import React, { useContext} from "react";
import "./StudentList.scss";
import {studentContext} from "../contexts/studentContext"
import { useHistory } from "react-router-dom";

function StudentList() {
    const history = useHistory();
    const {students}=useContext(studentContext)

  const navigateToCard = () =>{
    history.push("./studentCard")
  }

  return (
      <div>
          <h1 className = "student-list-h1">Our Students</h1>
    <div className="student-container">

      {students && students.map(student =>{
          return(
              <ul key = {student.id}>
                  <span><li>Grade {student.grade_id}</li></span>
                  <li>{student.first_name} {student.last_name}</li>
                  <button onClick = {navigateToCard}>More Info</button>
              </ul>
          )
      })}
      
    </div>
    </div>
  );
}

export default StudentList;
