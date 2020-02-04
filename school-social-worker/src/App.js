import React, { useState } from "react";
import { userContext } from "./contexts/userContext";
import "./App.scss";
import Form from "./components/Register";

function App() {
  const [user, setUser] = useState();
  const currentUser = name => {
    setUser(name);
  };
  return (
    <userContext.Provider value={{ user, currentUser }}>
      <div className="App">
        <img
          alt=""
          src="https://www.ghanamakeadifference.org/uploads/2/9/4/1/29418375/1481814865.png"
        />

        {/* 
        routes
        landing
        nav=privet 
        */}
        
        <h1>Register New User</h1>
        <Form />
      </div>
    </userContext.Provider>
  );
}

export default App;
