import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../contexts/userContext";
import "./Register.scss";


import {axiosWithAuth}from "../utils/axiosWithAuth";
import { headDiv, StylBtn } from "../Styles/styles";

function Form() {
  const { user, currentUser } = useContext(userContext);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = values => {
    axiosWithAuth()
      .post("/auth/register", values)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error.response));
  };
  console.log(errors);

  return (
    <headDiv className="form-container">
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="user-icon">
          <i
            class="fas fa-users"
            style={{ fontSize: "70px", color: "grey" }}
          ></i>
        </div>

        <h1>Register New User</h1>
        <i class="fas fa-signature" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="UserName"
          name="username"
          ref={register({ required: true, max: 15, min: 8 })}
        />
        <i class="fas fa-signature" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="First name"
          name="first_name"
          ref={register({ required: true, maxLength: 80 })}
        />
        <i class="fas fa-signature" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Last name"
          name="last_name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <i class="fas fa-envelope" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ pattern: /^\S+@\S+$/i })}
        />
        <i
          class="fas fa-phone-square-alt"
          style={{ fontSize: "20px", color: "grey" }}
        >
          :
        </i>
        <input
          type="tel"
          placeholder="Mobile number"
          name="phone"
          ref={register({ maxLength: 12 })}
        />
        <label className="role" htmlFor="role">
          {" "}
          Role:
          <select
            className="role"
            name="role"
            ref={register({ required: true })}
          >
            <option value="Administrator">Administrator</option>
            <option value=" Social Worker"> Social Worker</option>
          </select>
        </label>
        <i class="fas fa-building" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Organization"
          name="organization"
          ref={register({ required: true })}
        />
        <i class="fas fa-lock" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Password"
          name="password"
          ref={register({ required: true, min: 8 })}
        />

        <StylBtn type="submit">Register</StylBtn>
      </form>
    </headDiv>
  );
}

export default Form;
