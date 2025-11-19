import { lazy } from "react";

import Mainlayouts from "../layouts/Mainlayouts";

const adminnews = lazy(() => import("../pages/adminmanagement/adminnews"));
const adminNotice = lazy(() => import("../pages/adminmanagement/adminnotice"));
const register = lazy(() => import("../pages/adminmanagement/register"));

export const adminmanagementRouter = [
  {
    path: "adminnotice",
    element: <Mainlayouts children={<adminNotice/>} />,
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
