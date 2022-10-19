import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Main from "../../layout/Main/Main";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import Home from "../../components/Home/Home";

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
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default routes;
