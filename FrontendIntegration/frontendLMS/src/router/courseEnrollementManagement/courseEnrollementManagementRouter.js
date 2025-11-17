import courseEnrollementManagementStudentRouter from "./courseEnrollementManagementStudentRouter";
import courseEnrollementManagementProfessorRouter from "./courseEnrollementManagementProfessorRouter";
import courseEnrollementManagementAdminRouter from "./courseEnrollementManagementAdminRouter";

const Loading = <div>Loading......</div>;

const courseEnrollementManagementRouter = () => {
  return [
    // {
    //   path: "",
    //   element: <Navigate replace to="creditmanagement" />,
    // },
    {
      path: "student",
      children: courseEnrollementManagementStudentRouter(),
    },
    {
      path: "professor",
      children: courseEnrollementManagementProfessorRouter(),
    },
    {
      path: "admin",
      children: courseEnrollementManagementAdminRouter(),
    },
  ];
};

export default courseEnrollementManagementRouter;
