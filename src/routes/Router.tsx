import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { PATHNAMES } from "src/constants/routes";
import { Home, NotFound } from "src/pages";

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
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
