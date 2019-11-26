import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthUtils from "./AuthUtils";

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        AuthUtils.isUserLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to= {{
          pathname:'/login',
          state:{from:props.location}
        }}/>
        )
      }
    />
  );
};

export default AuthRoute;
