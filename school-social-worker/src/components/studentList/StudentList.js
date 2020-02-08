import React, { useContext } from "react";
import { studentContext } from "../../contexts/studentContext";
import StudentCard from "../studentCard/StudentCard";

function StudentList() {
  const { students } = useContext(studentContext);

  return (
    <div>
      <h1 className="student-list-h1">Our Students</h1>
      <div className="student-container">
        {students &&
          students.map(student => {
            return <StudentCard key={student.id} student={student} />;
          })}
      </div>
    </div>
  );
}

export default StudentList;
