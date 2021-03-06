import "./StudentCard.scss";  
import React from "react";
import { useHistory,Link } from "react-router-dom";

export default function StudentCard(props) {
  const student = props.student;
  const history = useHistory();
 
  console.log(student);
  return (
    
      <ul className="student-card" key={props.student.id}>
        <img src="https://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/bfa/bfa_user/bfa_user_flat-circle-white-on-yellow_512x512.png" />

        <li>
          {props.student.first_name} {props.student.last_name}
        </li>
        <span>
          <li>Grade {props.student.grade_id}</li>
        </span>
        <li>Status: {props.student.status}</li>
        {/* backend documentation says this is where the date is stored but it only shows a single number
        <li>Date of last visit: {props.student.visit_id}</li> */}
      </ul>
      
    
  );
}