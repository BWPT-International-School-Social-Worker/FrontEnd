import React from "react";
import { useForm } from "react-hook-form";
import "./MainNav.scss";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function MainNav(props) {
  const { handleSubmit, register } = useForm();
  const loginFunc = values => {
    console.log("credentials",values);
    axiosWithAuth()
      .post("/auth/login", values)
      .then(response => {
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        props.history.push(`/home`)
    })
      .catch(error => console.log(error.response));
  };
  return (
    <div className="nav-container">
      <img
        alt=""
        src="https://www.ghanamakeadifference.org/uploads/2/9/4/1/29418375/1481814865.png"
      />
      <nav>
        <div className="side-nav">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/student-list">Login</Link>
        </div>
        <div className="login-container">
          <form onSubmit={handleSubmit(loginFunc)}>
            <input
              ref={register}
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              ref={register}
              type="password"
              placeholder="Password"
              name="password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
