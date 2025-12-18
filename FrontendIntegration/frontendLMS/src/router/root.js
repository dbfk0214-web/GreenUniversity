import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import financeSupportRouter from "./financeSupportRouter";
import gradesAcademicRecordsRouter from "./gradesAcademicRecordsRouter";
import communityRouter from "./communityRouter";
import extracurricularprogramsRouter from "./extracurricularprogramsRouter";
import accountRouter from "./accountRouter";

// 통합된 단일 Router
import courseEnrollmentManagementRouter from "./courseEnrollmentManagementRouter";

import { adminmanagementRouter, adminRouter } from "./adminmanagementRouter";
import { studentRouter } from "./studentRouter";
import { professorRouter } from "./professorRouter";

const Mainlayouts = lazy(() => import("../layouts/Mainlayouts"));

const root = createBrowserRouter([
  {
    path: "",
    element: <Mainlayouts></Mainlayouts>,
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
    path: "admin",
    children: adminmanagementRouter,
  },
  {
    path: "student",
    children: studentRouter,
  },
  {
    path: "professor",
    children: professorRouter,
  },
]);

export default root;
