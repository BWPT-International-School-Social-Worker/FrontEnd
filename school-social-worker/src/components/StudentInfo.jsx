import React, { useContext } from "react";
import { studentContext } from "../contexts/studentContext";

function StudentInfo(props) {
  const { students } = useContext(studentContext);
  console.log(students);
  const student =
    students &&
    students.find(kid => {
      return `${kid.id}` === props.match.params.id;
    });

  console.log(student);

  return (
    <div className="student-info-container">
      <img src="https://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/bfa/bfa_user/bfa_user_flat-circle-white-on-yellow_512x512.png" />
      <h1>
        {student && student.first_name} {student && student.last_name}
      </h1>
    </div>
  );
}

export default StudentInfo;
