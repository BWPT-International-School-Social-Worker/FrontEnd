import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../contexts/userContext";
import "./Register.scss";
<<<<<<< HEAD
import { headDiv, StylBtn } from "../Styles/styles";
=======

import { HeadDiv, StylBtn } from "../Styles/styles";

>>>>>>> 43fd8449b063a7134c51fd944efabef1eaf3ccfe

function Form() {
  const { user, currentUser } = useContext(userContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    currentUser(data.FirstName);
    console.log(user);
  };
  console.log(errors);

  return (
<<<<<<< HEAD
    <headDiv className="form-container">
=======
    <HeadDiv className="form-container">
>>>>>>> 43fd8449b063a7134c51fd944efabef1eaf3ccfe
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <div className = "user-icon">
          <i
            class="fas fa-users"
            style={{ fontSize: "70px", color: "grey" }}
          ></i>
        </div>

        <h1>Register New User</h1>
        <i class="fas fa-signature" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
<<<<<<< HEAD
=======

>>>>>>> 43fd8449b063a7134c51fd944efabef1eaf3ccfe
        <input
          type="text"
          placeholder="UserName"
          name="UserName"
          ref={register({ required: true, max: 15, min: 8 })}
        />
        <i class="fas fa-signature" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="First name"
          name="FirstName"
          ref={register({ required: true, maxLength: 80 })}
        />
        <i class="fas fa-signature" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Last name"
          name="Last name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <i class="fas fa-envelope" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Email"
          name="Email"
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
          name="Mobile number"
          ref={register({ maxLength: 12 })}
        />
        <label className="role" htmlFor="role">
<<<<<<< HEAD
=======

>>>>>>> 43fd8449b063a7134c51fd944efabef1eaf3ccfe
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
        <i class="fas fa-building" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Organization"
          name="Organization"
          ref={register({ required: true })}
        />
        <i class="fas fa-lock" style={{ fontSize: "20px", color: "grey" }}>
          :
        </i>
        <input
          type="text"
          placeholder="Password"
          name="Password"
          ref={register({ required: true, min: 8 })}
        />
<<<<<<< HEAD
=======

        
>>>>>>> 43fd8449b063a7134c51fd944efabef1eaf3ccfe
        <StylBtn type="submit">Register</StylBtn>
      </form>
    </HeadDiv>
  );
}

export default Form;
