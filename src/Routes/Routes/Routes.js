import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Main from "../../layout/Main/Main";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

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
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default routes;
