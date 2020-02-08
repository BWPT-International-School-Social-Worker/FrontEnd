import React from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom"

import {axiosWithAuth}from "../utils/axiosWithAuth";

function Form() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory()

  const registerFunc = values => {
    axiosWithAuth()
      .post("/auth/register", values)
      .then(response => {
        console.log(response);
        history.push("/login")
      })
      .catch(error => console.log(error.response));
  };
  console.log(errors);

  return (
      <form className="sign-up-form" onSubmit={handleSubmit(registerFunc)}>
        <div className="user-icon">
          <i
            className="fas fa-users"
            style={{ fontSize: "70px", color: "grey" }}
          ></i>
        </div>

        <h1>Register New User</h1>
      
        <i className="fas fa-signature" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
       
        <input
          type="text"
          placeholder="UserName"
          name="username"
          ref={register({ required: true, max: 15, min: 8 })}
        />
        <i className="fas fa-signature" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="First name"
          name="first_name"
          ref={register({ required: true, maxLength: 80 })}
        />
        <i className="fas fa-signature" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Last name"
          name="last_name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <i className="fas fa-envelope" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ pattern: /^\S+@\S+$/i })}
        />
        <i
          className="fas fa-phone-square-alt"
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
        <i className="fas fa-building" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Organization"
          name="organization"
          ref={register({ required: true })}
        />
        <i className="fas fa-lock" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Password"
          name="password"
          ref={register({ required: true, min: 8 })}
        />

        <button type="submit">Register</button>
      </form>
  );
}

export default Form;
