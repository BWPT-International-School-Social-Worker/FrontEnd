import React, { useContext} from "react";
import "./StudentList.scss";
import {studentContext} from "../contexts/studentContext"
import { useHistory } from "react-router-dom";
import StudentCard from "./StudentCard";




function StudentList() {
    const history = useHistory();
    const {students}=useContext(studentContext)

  


  
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
