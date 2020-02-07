import React, { useState, useEffect } from "react";
import { studentContext } from "./contexts/studentContext";
import "./App.scss";
import Form from "./components/Register";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import StudentCard from "./components/StudentCard";
import { Route } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import StudentInfo from "./components/StudentInfo";
import AddStudentForm from "./components/AddStudentForm";

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
    <studentContext.Provider value={{ students, getStudents }}>
      <div className="App">
        <MainNav />
        <Route path="/register" exact>
          <Form />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/student-list" exact>
          <StudentList />
        </Route>
        <Route path="/student-card" exact>
          <StudentCard />
        </Route>
        <Route
          exact path={`/student-info/:id`}
          render={props => <StudentInfo {...props} />}
        />

        <Route path="/add-form" exact>
          <AddStudentForm />
        </Route>

        <Footer />
      </div>
    </studentContext.Provider>
  );
}

export default App;
