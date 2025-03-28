import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { Home, Lab1, NotFound } from "src/pages";
import { PATHNAMES } from "src/constants/routes";

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <Lab1 />,
    path: PATHNAMES.Lab_1,
  },
  {
    element: <NotFound />,
    path: PATHNAMES.NOT_FOUND,
  },
];

const AppRoutes: FC = () => {
  return useRoutes(ROUTES);
};

export default AppRoutes;
