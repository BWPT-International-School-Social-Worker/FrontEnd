import React, { useState, useEffect } from "react";
import "./StudentList.scss";
import { students } from "../data";

function StudentList() {
  const [kids, setKids] = useState(students);
  console.log(kids);
  return (
    <div>
      <h1>Current Students</h1>
      <div className="student-container">
        {kids.map(kid => {
          return (
            <div className="student-list">
              <ul>
                <li>Student Id: {kid.id}</li>
                <br/>
                <li>{kid.first_name}</li>
                <li>{kid.last_name}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;
