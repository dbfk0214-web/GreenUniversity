import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import academicAffairsRouter from "./academicAffairsRouter";
import financeSupportRouter from "./financeSupportRouter";
import gradesAcademicRecordsRouter from "./gradesAcademicRecordsRouter";
import notificationCenterRouter from "./notificationCenterRouter";
import communityRouter from "./communityRouter";
import extracurricularprogramsRouter from "./extracurricularprogramsRouter";
import accountRouter from "./accountRouter";

// 통합된 단일 Router
import courseEnrollmentManagementRouter from "./courseEnrollmentManagementRouter";

import { adminmanagementRouter } from "./adminmanagementRouter";

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
    path: "extracurricularprograms",
    children: extracurricularprogramsRouter(),
  },
  {
    path: "account",
    children: accountRouter(),
  },
  {
    path: "courseenrollmentmanagement",
    children: courseEnrollmentManagementRouter(), // ← 수정된 부분
  },
  {
    path: "adminmanagement",
    children: adminmanagementRouter,
  },
  {
    path: "adminnotice",
  },
]);

export default root;
