import React, { useEffect, useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { studentContext } from "../contexts/studentContext";
import "./StudentCard.scss";

function Student(props) {
  const [currentStudent, setCurrentStudent] = useState({});
  const id = props.match.params.id;
  const history = useHistory();
  const { getStudents } = useContext(studentContext);

  const getStudent = () => {
    axiosWithAuth()
      .get(`/students/${id}`)
      .then(response => {
        console.log(response.data);
        setCurrentStudent(response.data);
      })
      .catch(error => console.log(error.response));
  };

  const deleteFunc = () => {
    axiosWithAuth()
      .delete(`/students/${id}`)
      .then(response => {
        console.log(response.data);
        history.push("/students");
        getStudents();
      })
      .catch(error => console.log(error.response));
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div className = "info-container">
      <h4>
        <div>
          <ul className="student-info-card" key={currentStudent.id}>
            <img src="https://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/bfa/bfa_user/bfa_user_flat-circle-white-on-yellow_512x512.png" />

            <li>
              Name: {currentStudent.first_name} {currentStudent.last_name}
            </li>
            <span>
              <li>Grade: {currentStudent.grade_id}</li>
            </span>
            <li>Status: {currentStudent.status}</li>
            <span>
              <li>Backgound: {currentStudent.background_story}</li>
            </span>
            <span>
              <li>Age: {currentStudent.age}</li>
            </span>
            <span>
              <li>Insurance: {currentStudent.insurance_card}</li>
            </span>
            <span>
              <li>
                Insurance Expires : {currentStudent.insurance_expiration_date}
              </li>
            </span>
            <span>
              <li>Birth Certificate: {currentStudent.birth_certificate}</li>
            </span>
            <span>
              <li>Special Needs: {currentStudent.special_needs}</li>
            </span>
            <span>
              <li>Representitive's Name: {currentStudent.representative}</li>
            </span>
            <span>
              <li>Contact Information: {currentStudent.contact_info}</li>
            </span>
            {/* backend documentation says this is where the date is stored but it only shows a single number */}
            <li>Date of last visit: {currentStudent.visit_id}</li>
          </ul>
        </div>
      </h4>
      <Link to={`/edit/${id}`}>Edit</Link>
      <button className= "delete" onClick={deleteFunc}>Delete</button>
    </div>
  );
}

export default Student;
