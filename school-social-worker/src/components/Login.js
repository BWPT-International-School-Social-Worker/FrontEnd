import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import "./Login.scss";


function Login() {
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const loginFunc = values => {
    console.log("credentials", values);
    axiosWithAuth()
      .post("/auth/login", values)
      .then(response => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/home");
      })
      .catch(error => console.log(error.response));
  };

  return (
    <div className="form-container">
      <form className="sign-in-form" onSubmit={handleSubmit(loginFunc)}>
        <h1>Login Here</h1>
       
  
<label htmlFor = "Username"> UserName:
         </label>
      
        <input
          ref={register}
          type="text"
          placeholder="Username"
          name="username"
        />
        <label htmlFor = "Password"> Password:
         </label>
        <input
          ref={register}
          type="password"
          placeholder="Password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
