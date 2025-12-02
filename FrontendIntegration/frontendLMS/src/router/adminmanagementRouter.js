import { lazy } from "react";

import Mainlayouts from "../layouts/Mainlayouts";
import AdminHomeDashboard from "../pages/adminmanagement/AdminHomeDashboard";
import Notice from "../pages/adminmanagement/Notice";
import Userrole from "../pages/adminmanagement/Userrole";
import Courseclass from "../pages/adminmanagement/Courseclass";
import Events from "../pages/adminmanagement/Events";
import Inquiry from "../pages/adminmanagement/Inquiry";
import Support from "../pages/adminmanagement/Support";
import Interalcommunity from "../pages/adminmanagement/Interalcommunity";

export const adminmanagementRouter = [
  {
    path: "",
    element: <Mainlayouts children={<AdminHomeDashboard/>} />,
  },
  {
    path: "notice",
    element: <Mainlayouts children={<Notice />} />,
  },
    {
    path: "userrole",
    element: <Mainlayouts children={<Userrole />} />,
  },
      {
    path: "courseclass",
    element: <Mainlayouts children={<Courseclass />} />,
  },
        {
    path: "events",
    element: <Mainlayouts children={<Events/>} />,
  },
    {
    path: "inquiry",
    element: <Mainlayouts children={<Inquiry/>} />,
  },
    {
    path: "support",
    element: <Mainlayouts children={<Support />} />,
  },
      {
    path: "interalcommunity",
    element: <Mainlayouts children={<Interalcommunity />} />,
  },
];
