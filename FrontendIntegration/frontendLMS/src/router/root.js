import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import academicAffairsRouter from "./academicAffairsRouter";
import financeSupportRouter from "./financeSupportRouter";
import gradesAcademicRecordsRouter from "./gradesAcademicRecordsRouter";
import notificationCenterRouter from "./notificationCenterRouter";
import communityRouter from "./communityRouter";
import courseEnrollementManagementRouter from "./courseEnrollmentManagement/courseEnrollementManagementRouter";
import extracurricularprogramsRouter from "./extracurricularprogramsRouter";
import accountRouter from "./accountRouter";
import Data from "../components/Data";

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
  {
    path: "courseenrollementmanagement",
    children: courseEnrollementManagementRouter(),
  },
  {
    path: "extracurricularprograms",
    children: extracurricularprogramsRouter(),
  },
  {
    path: "account",
    // element: <Suspense fallback={Loading}><Basiclayout children={<Main />}></Basiclayout></Suspense>,
    children: accountRouter(),
  },
  {
    path: "academic_info.json",
   element:<Data/>
  },
]);

export default root;
