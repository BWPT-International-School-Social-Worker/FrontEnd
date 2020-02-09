import React, { useState, useEffect } from "react";
import { studentContext } from "./contexts/studentContext";
import Routes from "./components/Routes";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import Footer from "./components/Footer";

function App() {
  const [students, setStudents] = useState();

  const getStudents = () => {
    axiosWithAuth()
      .get("/students")
      .then(response => {
        console.log("students", response.data);
        setStudents(response.data);
      })
      .catch(error => console.log(error.response));
  };

  useEffect(() => {
    localStorage.getItem("token") && getStudents();
  }, []);

  return (
    <studentContext.Provider value={{ students, getStudents }}>
      <Routes/>
      <Footer></Footer>
    </studentContext.Provider>
  );
}

export default App;
