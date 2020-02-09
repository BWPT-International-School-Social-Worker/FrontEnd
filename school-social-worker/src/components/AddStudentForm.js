import "./AddStudentForm.scss";

import React, {useContext } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { studentContext } from "../contexts/studentContext";

const EditStudentForm = () => {
  const { getStudents } = useContext(studentContext);

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

  const addFunc = value => {
    console.log(value);
    axiosWithAuth()
      .post(`/students`, value)
      .then(response => {
        console.log(response);
        getStudents();
      })
      .catch(error => console.log(error.response));
  };

  return (
    <div className = "add-container">
        <h1>Register New student</h1>
      <form className="add-form" onSubmit={handleSubmit(addFunc)}>
      <label htmlFor="first_name">First Name of New Student</label>
        <input
          type="text"
          placeholder="first_name"
          name="first_name"
          ref={register}
        />
        <input
          type="text"
          placeholder="last_name"
          name="last_name"
          ref={register}
        />
        <input
          type="number"
          placeholder="grade_id"
          name="grade_id"
          ref={register}
        />
        <input
          type="text"
          placeholder="background_story"
          name="background_story"
          ref={register}
        />
        <input
          type="text"
          placeholder="status"
          name="status"
          ref={register}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          ref={register}
        />
        <label htmlFor="insurance_card">Has Insurance Card?</label>
        <input type="checkbox" name="insurance_card" ref={register} />
        <input
          type="datetime"
          placeholder="insurance_expiration_date"
          name="insurance_expiration_date"
          ref={register}
        />
        <label htmlFor="birth_certificate">Has birth certificate?</label>
        <input type="checkbox" name="birth_certificate" ref={register} />
        <input
          type="text"
          placeholder="birth_certificate"
          name="special_needs"
          ref={register}
        />
        <input
          type="text"
          placeholder="representative"
          name="representative"
          ref={register}
        />
        <input
          type="text"
          placeholder="contact_info"
          name="contact_info"
          ref={register}
        />
        <input
          type="number"
          placeholder="visit_id"
          name="visit_id"
          ref={register}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default EditStudentForm;