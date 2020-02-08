import React, { useContext } from "react";
import { studentContext } from "../contexts/studentContext";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";

function StudentList() {
  const { students } = useContext(studentContext);

  return (
    <div>
      <h1 className="student-list-h1">Our Students</h1>
      <div className="student-container">
        {students &&
          students.map(student => {
            return (
              <Link to={`/student/${student.id}`}>
                <StudentCard key={student.id} student={student} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default StudentList;
