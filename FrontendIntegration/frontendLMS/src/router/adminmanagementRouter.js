import { lazy } from "react";

import Mainlayouts from "../layouts/Mainlayouts";
import AdminHomeDashboard from "../pages/adminmanagement/AdminHomeDashboard";

const adminnews = lazy(() => import("../pages/adminmanagement/adminnews"));
const adminpage = lazy(() => import("../pages/adminmanagement/AdminHomeDashboard"));
const register = lazy(() => import("../pages/adminmanagement/register"));

export const adminmanagementRouter = [
  {
    path: "",
    element: <Mainlayouts children={<AdminHomeDashboard/>} />,
  },
  {
    path: "adminnews",
    element: <Mainlayouts children={<adminnews />} />,
  },
    {
    path: "register",
    element: <Mainlayouts children={<register />} />,
  },
];
