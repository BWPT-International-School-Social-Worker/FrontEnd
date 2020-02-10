import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { StylBtn } from "../Styles/styles";
// import MainNav from "./MainNav";
import * as yup from "yup";
import "./Register.scss";

const schema = yup.object().shape({
  username: yup.string().required().min(8).max(15),
  first_name:yup.string().required().max(12),
  last_name:yup.string().required().max(12),
  email:yup.string().email().required(),
  password:yup.string().required().min(8),
  organization:yup.string().required()
});

function Form() {

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });


  const registerFunc = values => {
    axiosWithAuth()
      .post("/auth/register", values)
      .then(response => {
        
        console.log(response);
       
      })
      .catch(error => console.log(error.response));
  };
  console.log(errors);

  return (
    <div>
      {/* <MainNav/> */}
    <div className="form-container">
      
      <form className="sign-up-form" onSubmit={handleSubmit(registerFunc)}>
        <div className="user-icon">
          <i
            className="fas fa-users"
            style={{ fontSize: "70px", color: "grey" }}
          ></i>
        </div>

        <h1>Register New User</h1>

        <i
          className="fas fa-signature"
          style={{ fontSize: "20px", color: "grey" }}
        >
          :
        </i>

        <input
          type="text"
          placeholder="UserName"
          name="username"
          ref={register({ required: true, max: 15, min: 8 })}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <i
          className="fas fa-signature"
          style={{ fontSize: "20px", color: "grey" }}
        >
          :
        </i>
        <input
          type="text"
          placeholder="First name"
          name="first_name"
          ref={register({ required: true, maxLength: 12 })}
        />
        {errors.first_name && <p>{errors.first_name.message}</p>}
        <i
          className="fas fa-signature"
          style={{ fontSize: "20px", color: "grey" }}
        >
          :
        </i>
        <input
          type="text"
          placeholder="Last name"
          name="last_name"
          ref={register({ required: true, maxLength:12 })}
        />
        {errors.last_name && <p>{errors.last_name.message}</p>}
        <i
          className="fas fa-envelope"
          style={{ fontSize: "20px", color: "grey" }}
        >
          :
        </i>
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>{errors.email.message}</p>}
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
        className = "password-icon"
          type="text"
          placeholder="Password"
          name="password"
          ref={register({ required: true, min: 8 })}
        />
           {errors.password && <p>{errors.password.message}</p>}

        <StylBtn type="submit">Register</StylBtn>
      </form>
    </div>
    </div>
  );
}

export default Form;