import React, { useState } from "react";
import "./AddStudentForm.scss";
import useForm from "./useForm";
import {axiosWithAuth} from "../utils/axiosWithAuth"

function AddStudentForm() {
  const { handleChanges, handleSubmit, values } = useForm(submit);

  function submit(values) {
    console.log("values",values)
    axiosWithAuth()
    .post("/students",values)
    .catch(error => console.log(error.response));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <div>
            <label>First Name of New Student</label>
          </div>
          <input
            name="first_name"
            type="text"
            value={values.first_name}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Last Name of New Student</label>
          </div>
          <input
            name="last_name"
            type="text"
            value={values.last_name}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Current Grade of New Student</label>
          </div>
          <input
            name="grade_id"
            type="number"
            placeholder="select a number"
            value={values.grade_id}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Background Bio of New Student</label>
          </div>
          <input
            name="background_story"
            type="text"
            value={values.background_story}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Current status of New Student</label>
          </div>
          <select
            name="status"
            type="text"
            value={values.status}
            onChange={handleChanges}
          >
            <option value={"student"}>Student</option>
            <option value={"past student"}>Former Student</option>
            <option value={"visitor"}>Visitor</option>
          </select>
        </div>
        <div>
          <div>
            <label>Current Age of New Student</label>
          </div>
          <input
            name="age"
            type="number"
            placeholder="select a number"
            value={values.age}
            onChange={handleChanges}
          />
        </div>

        <div>
          <div>
            <label>Does student have insurance?</label>
          </div>
          <input
            name="insurance_card"
            type="checkbox"
            value={values.insurance_card}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Insurance Expiration Date</label>
          </div>
          <input
            name="insurance_expiration_date"
            type="text"
            value={values.insurance_expiration_date}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Does student have birth certificate?</label>
          </div>
          <input
            name="birth_certificate"
            type="checkbox"
            value={values.birth_certificate}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Please List any special needs the student might have</label>
          </div>
          <input
            name="special_needs"
            type="text"
            value={values.special_needs}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Name of representative</label>
          </div>
          <input
            name="representative"
            type="text"
            value={values.representative}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Current contact information of New Student</label>
          </div>
          <input
            name="contact_info"
            type="text"
            value={values.contact_info}
            onChange={handleChanges}
          />
        </div>
        <div>
          <div>
            <label>Number of visits to date</label>
          </div>
          <input
            name="visit_id"
            type="number"
            value={values.visit_id}
            onChange={handleChanges}
          />
        </div>
        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
