import React, { useState } from "react";
import { userContext } from "./contexts/userContext";
import "./App.scss";
import Form from "./components/Register";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  const currentUser = name => {
    setUser(name);
  };
  return (
    <userContext.Provider value={{ user, currentUser }}>
      <div className="App">
        <MainNav />
        <Route path="/register" exact>
          <Form />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
