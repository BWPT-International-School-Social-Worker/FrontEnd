import React, { useState,useEffect } from "react";
import "./StudentList.scss";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

function StudentList() {
    const history = useHistory();
  const [students, setStudents] = useState();
  const getStudents = () => {
    axiosWithAuth()
      .get("/students")
      .then(response => {
        console.log("students", response.data);
        setStudents(response.data);
      });
  };
  useEffect(() => {
    localStorage.getItem("token") &&
    getStudents();
  }, []);

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
