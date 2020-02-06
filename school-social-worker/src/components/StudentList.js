import React, { useState, useEffect } from "react";
import "./StudentList.scss";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import StudentCard from "./StudentCard";




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
    localStorage.getItem("token") && getStudents();
  }, []);

  


  
  return (
    <div>
      <h1 className="student-list-h1">Our Students</h1>
      <div className="student-container">
        {students &&
          students.map(student => {
            return <StudentCard key = {student.id} kid={student} name = {student.first_name} />;
          })}
      </div>
   
    </div>
  );
}

export default StudentList;
