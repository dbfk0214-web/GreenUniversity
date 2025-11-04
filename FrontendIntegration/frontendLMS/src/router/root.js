import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import academicAffairsRouter from "./academicAffairsRouter";
import financeSupportRouter from "./financeSupportRouter";
import gradesAcademicRecordsRouter from "./gradesAcademicRecordsRouter";
import notificationCenterRouter from "./notificationCenterRouter";
import communityRouter from "./communityRouter";

const Mainlayouts = lazy(() => import("../layouts/Mainlayouts"));

const root = createBrowserRouter([
  {
    path: "",
    element: <Mainlayouts></Mainlayouts>,
  },
  {
    path: "academicaffairs",
    children: academicAffairsRouter(),
  },
  {
    path: "financesupport",
    children: financeSupportRouter(),
  },
  {
    path: "gradesacademicrecords",
    children: gradesAcademicRecordsRouter(),
  },
  {
    path: "notificationcenter",
    children: notificationCenterRouter(),
  },
  {
    path: "community",
    children: communityRouter(),
  },
]);

export default root;
