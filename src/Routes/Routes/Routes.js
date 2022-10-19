import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Main from "../../layout/Main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
    ],
  },
]);

export default routes;
