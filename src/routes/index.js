import Main from "./Main";
import Login from "./Login";
import Callback from "../Callback";
import NotFound from "../NotFound";
import { Route } from "react-router-dom";
import React from "react";
import AuthRoute from "../utils/AuthRoute";
import Playlist from "./Main/Playlist/Playlist";

/**
 * FIXME:
 * path = '/playlist/:id' not optimized ,
 */

export const routes = [
  {
    path: "/main",
    component: Main
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/callback",
    component: Callback
  },
  {
    path: "/",
    component: NotFound
  }
];

export const renderRoutes = routes => {
  return routes.map(route => {
    if (route.auth === true)
      return (
        <AuthRoute
          key={route.path}
          path={route.path}
          component={route.component}
        />
      );
    return (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
        render={route.render}
      />
    );
  });
};
