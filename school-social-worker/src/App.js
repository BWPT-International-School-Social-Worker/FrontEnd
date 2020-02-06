import React, { useState } from "react";
import { userContext } from "./contexts/userContext";
import "./App.scss";
import Form from "./components/Register";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import StudentCard from "./components/StudentCard";
import { Route } from "react-router-dom";


function App() {
  const [user, setUser] = useState();
  const currentUser = name => {
    setUser(name);
  };
  return (
    <userContext.Provider value={{ user, currentUser }}>
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
        <Route path="/student-card" exact>
          <MainNav />
          <StudentCard />
        </Route>
        
        <Footer />
        {/* {
          routes
          priv = nav landing
        } */}
      </div>
    </userContext.Provider>
  );
}

export default App;
