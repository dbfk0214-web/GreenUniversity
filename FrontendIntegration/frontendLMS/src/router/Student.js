import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HeaderStudent = lazy(() => import("../layouts/subheader/HeaderStudent"));

const root = createBrowserRouter([
  {
    path: "",
    element: <StudentMain></StudentMain>,
  },
]);

export default root;
