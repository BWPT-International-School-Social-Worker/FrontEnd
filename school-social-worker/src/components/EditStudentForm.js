import "./EditForm.scss";

import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { studentContext } from "../contexts/studentContext";
import { useHistory } from "react-router-dom";

const EditStudentForm = props => {
  const [currentStudent, setCurrentStudent] = useState({});
  const { getStudents } = useContext(studentContext);
  const id = props.match.params.id;
  const history = useHistory();

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
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      first_name: "testStudent21",
      last_name: "testStudentPassword",
      grade_id: "11",
      background_story: "background story",
      status: "student",
      age: 16,
      insurance_card: 1,
      insurance_expiration_date: "12-31-2020",
      birth_certificate: 1,
      special_needs: "special needs",
      representative: "representative's name",
      contact_info: "contact information",
      visit_id: 3
    }
  });

  const editFunc = value => {
    console.log(value);
    axiosWithAuth()
      .put(`/students/${id}`, value)
      .then(response => {
        console.log(response);
        getStudents();
        history.push("/students")
      })
      .catch(error => console.log(error.response));
  };

  return (
    <div className="edit-container">
      <form className="edit-form" onSubmit={handleSubmit(editFunc)}>
        <input
          type="text"
          placeholder={`${currentStudent.first_name}`}
          name="first_name"
          ref={register}
        />
        <input
          type="text"
          placeholder={`${currentStudent.last_name}`}
          name="last_name"
          ref={register}
        />
        <input
          type="number"
          placeholder={`${currentStudent.grade_id}`}
          name="grade_id"
          ref={register}
        />
        <input
          type="text"
          placeholder={`${currentStudent.background_story}`}
          name="background_story"
          ref={register}
        />
        <input
          type="text"
          placeholder={`${currentStudent.status}`}
          name="status"
          ref={register}
        />
        <input
          type="number"
          placeholder={`${currentStudent.age}`}
          name="age"
          ref={register}
        />
        <label htmlFor="insurance_card">Has Insurance Card?</label>
        <input type="checkbox" name="insurance_card" ref={register} />
        <input
          type="datetime"
          placeholder={`${currentStudent.insurance_expiration_date}`}
          name="insurance_expiration_date"
          ref={register}
        />
        <label htmlFor="birth_certificate">Has birth certificate?</label>
        <input type="checkbox" name="birth_certificate" ref={register} />
        <input
          type="text"
          placeholder={`${currentStudent.special_needs}`}
          name="special_needs"
          ref={register}
        />
        <input
          type="text"
          placeholder={`${currentStudent.representative}`}
          name="representative"
          ref={register}
        />
        <input
          type="text"
          placeholder={`${currentStudent.contact_info}`}
          name="contact_info"
          ref={register}
        />
        <input
          type="number"
          placeholder={`${currentStudent.visit_id}`}
          name="visit_id"
          ref={register}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default EditStudentForm;
