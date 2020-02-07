import React, { useState, useEffect } from "react";
import { studentContext } from "./contexts/studentContext";
import "./App.scss";
import Form from "./components/register/Register";
import MainNav from "./components/nav/MainNav";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import StudentList from "./components/studentList/StudentList";
import StudentCard from "./components/studentCard/StudentCard";
import { Route } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import StudentInfo from "./components/moreInfo/StudentInfo";

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
    <studentContext.Provider value={{students, getStudents}}>
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
          path={`/student-info/:id`}
          render={props => <StudentInfo {...props} />}
        />

        <Footer />
      </div>
    </studentContext.Provider>
  );
}

export default App;
