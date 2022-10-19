import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Main from "../../layout/Main/Main";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/room",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default routes;
