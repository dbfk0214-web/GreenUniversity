import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Mainlayouts from "../../layouts/Mainlayouts";
import courseEnrollementManagement_StudentRouter from "./courseEnrollementManagement_StudentRouter";
import courseEnrollementManagement_ProfessorRouter from "./courseEnrollementManagement_ProfessorRouter";
import courseEnrollementManagement_AdminRouter from "./courseEnrollementManagement_AdminRouter";

const Loading = <div>Loading......</div>;

const courseEnrollementManagementRouter = () => {
  return [
    // {
    //   path: "",
    //   element: <Navigate replace to="creditmanagement" />,
    // },
    {
      path: "student",
      children: courseEnrollementManagement_StudentRouter(),
    },
    {
      path: "professor",
      children: courseEnrollementManagement_ProfessorRouter(),
    },
    {
      path: "admin",
      children: courseEnrollementManagement_AdminRouter(),
    },
  ];
};

export default courseEnrollementManagementRouter;
