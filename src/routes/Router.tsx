import React, { FC } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Lab1, Lab2, NotFound } from "src/pages";
import { PATHNAMES } from "src/constants/routes";

const ROUTES = [
  {
    path: PATHNAMES.HOME,
    element: <Navigate to={PATHNAMES.Lab_1} replace />,
  },
  {
    element: <Lab1 />,
    path: PATHNAMES.Lab_1,
  },
  {
    element: <Lab2 />,
    path: PATHNAMES.Lab_2,
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
