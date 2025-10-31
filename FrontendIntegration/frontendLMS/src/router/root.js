import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Mainlayouts = lazy(() => import("../layouts/Mainlayouts"));

const root = createBrowserRouter([
  {
    path: "",
    element: <Mainlayouts></Mainlayouts>,
  },
]);

export default root;
