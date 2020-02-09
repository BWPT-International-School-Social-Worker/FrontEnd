import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  let loggedIn = localStorage.getItem("token");

  setTimeout(2000,)
  return (
    <Route
      {...rest}
      render={() => {
        if (loggedIn) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
