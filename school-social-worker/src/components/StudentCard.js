import "./StudentCard.scss";  
import React from "react";
import { useHistory } from "react-router-dom";

export default function StudentCard(props) {
  const student = props.student;
  const history = useHistory();
  const routeToPage = () => {
    history.push(`/student-info/${props.student.id}`);
  };
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
        <button onClick={() => routeToPage()}>More Info</button>
      </ul>
      
    
  );
}