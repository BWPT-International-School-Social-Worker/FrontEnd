import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

function Login () {
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const loginFunc = values => {
    console.log("credentials", values);
    const token = localStorage.getItem("token");
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
    <div>
      login
      <form onSubmit={handleSubmit(loginFunc)}>
        <input
          ref={register}
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          ref={register}
          type="text"
          placeholder="Password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
