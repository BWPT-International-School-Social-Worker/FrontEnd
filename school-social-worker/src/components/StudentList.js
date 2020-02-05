import React, { useState,useEffect } from "react";
import "./StudentList.scss";
import {axiosWithAuth} from "../utils/axiosWithAuth";

function StudentList() {
  const [students, setStudents] = useState();
  const getStudents = () => {
    axiosWithAuth()
      .get("/students")
      .then(response => {
        console.log("students", response);
        setStudents(response);
      });
  };
  useEffect(() => {
    localStorage.getItem("token") &&
    getStudents();
  }, []);

  return (
    <div className="student-container">
      <h1>list</h1>
    </div>
  );
}

export default StudentList;
