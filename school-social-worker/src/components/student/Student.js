import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";

function Student(props) {
  const [currentStudent, setCurrentStudent] = useState({});
  const id = props.match.params.id;

  const getStudent = () => {
    axiosWithAuth()
      .get(`/students/${id}`)
      .then(response => {
        console.log(response.data);
        setCurrentStudent(response.data);
      });
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div>
      <h4>
        {currentStudent.first_name} {currentStudent.last_name}
      </h4>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
}

export default Student;
