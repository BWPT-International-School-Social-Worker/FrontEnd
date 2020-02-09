import React, { useEffect, useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { studentContext } from "../contexts/studentContext";
import StudentCard from "./StudentCard";

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
  });

  return (
    <div>
      <h4>
        <StudentCard student={currentStudent}></StudentCard>
      </h4>
      <Link to={`/edit/${id}`}>Edit</Link>
      <button onClick={deleteFunc}>Delete</button>
    </div>
  );
}

export default Student;