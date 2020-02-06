import React, { useState, useEffect } from "react";
import { studentContext } from "./contexts/studentContext";
import "./App.scss";
import Form from "./components/Register";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import { Route } from "react-router-dom";
import {axiosWithAuth} from "./utils/axiosWithAuth"

function App() {
  const [students, setStudents] = useState();

  const getStudents = () => {
    axiosWithAuth()
      .get("/students")
      .then(response => {
        console.log("students", response.data);
        setStudents(response.data);
      });
  };

  useEffect(() => {
    localStorage.getItem("token") && getStudents();
  }, []);

  return (
    <studentContext.Provider value={{students}}>
      <div className="App">
        <Route path="/register" exact>
          <MainNav />
          <Form />
        </Route>
        <Route path="/" exact>
          <MainNav />
          <Home />
        </Route>
        <Route path="/student-list" exact>
          <MainNav />
          <StudentList />
        </Route>
        <Footer />
      </div>
    </studentContext.Provider>
  );
}

export default App;
