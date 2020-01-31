import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../contexts/userContext";
import "./Register.scss";
import {HeadDiv, StylBtn} from "../Styles/styles";

function Form() {
  const { user,currentUser } = useContext(userContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    currentUser(data.FirstName);
    console.log(user)
  };
  console.log(errors);

  return (
      
    <HeadDiv >
        
      <form className = "sign-up-form" onSubmit={handleSubmit(onSubmit)}>

      <input
          type="text"
          placeholder="UserName"
          name="UserName"
          ref={register({ required: true, max: 15, min: 8 })}
        />
        <input
          type="text"
          placeholder="First name"
          name="FirstName"
          ref={register({ required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          name="Last name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({ pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          name="Mobile number"
          ref={register({ maxLength: 12 })}
        />
        <label htmlFor="role">
          {" "}
          Role:
          <select
            className="role"
            name="Role"
            ref={register({ required: true })}
          >
            <option value="Administrator">Administrator</option>
            <option value=" Social Worker"> Social Worker</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="Organization"
          name="Organization"
          ref={register({ required: true })}
        />
        <input
          type="text"
          placeholder="Password"
          name="Password"
          ref={register({ required: true, min: 8 })}
        />
        <StylBtn  type="submit" >Register</StylBtn>
      </form>
    </HeadDiv>
  );
}

export default Form;
