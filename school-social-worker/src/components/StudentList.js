import React, { useContext } from "react";
import "./StudentList.scss";
import { studentContext } from "../contexts/studentContext";
import { useHistory, Link } from "react-router-dom";
import StudentCard from "./StudentCard";

function StudentList() {
  const history = useHistory();
  const { students } = useContext(studentContext);

  return (
    <div>
      <h1 className="student-list-h1">Our Students</h1>
      <Link to="/add-form">
        <button>Add new Student</button>
      </Link>
      <div className="student-container">
        {students &&
          students.map(student => {
            return (
              <StudentCard
                key={student.id}
                kid={student}
                name={student.first_name}
              />
            );
          })}
      </div>
    </div>
  );
}

export default StudentList;
