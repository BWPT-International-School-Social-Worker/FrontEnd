import React from "react";
import "./App.scss";
import Form from "./components/Register";
import { Route } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <img className="ghana" src="https://www.ghanamakeadifference.org/uploads/2/9/4/1/29418375/1481814865.png" />
      <Route exact path="/">
      <h1>Register New User</h1>
      <Form />
      </Route>
      <Route exact path="/Sign-in">
        <SignIn />
      </Route>
    </div>
  );
}

export default App;
