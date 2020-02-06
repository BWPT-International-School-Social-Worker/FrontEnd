import React, { useEffect, useState } from "react";
import "./StudentCard.scss";
import {Link} from "react-router-dom";
import EditStudentForm from "./EditStudentForm";



export default function StudentCard(props) {
   console.log(props);
  return (
    <ul className="student-card" key={props.kid.id}>
        
      <img src="https://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/bfa/bfa_user/bfa_user_flat-circle-white-on-yellow_512x512.png" />

      <li>
        {props.kid.first_name} {props.kid.last_name}
      </li>
      <span>
        <li>Grade {props.kid.grade_id}</li>
      </span>
      <li>Status: {props.kid.status}</li>
      <button >More Info</button>
      <EditStudentForm/>
    </ul>

    
  );
  
}
