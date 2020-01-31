import React from "react";
import { useForm } from "react-hook-form";
import "./Register.scss";
import {headDiv, stylBtn} from "../Styles/styles";

function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
      
    <headDiv >
        
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
          name="First name"
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
        <label className = "role" htmlFor = "role"> Role: 
            <select  className = "role" name="Role" ref={register({ required: true })}>
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
        

        <stylBtn  type="submit" >Register</stylBtn>
      </form>
    </headDiv>
  );
}

export default Form;
