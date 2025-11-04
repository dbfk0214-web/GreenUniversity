import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Mainlayouts from "../../layouts/Mainlayouts";

const Loading = <div>Loading......</div>;
const Courses = lazy(() =>
  import("../../pages/CourseEnfollementManagement/admin/Courses")
);
const Lectures = lazy(() =>
  import("../../pages/CourseEnfollementManagement/admin/Lectures")
);

const courseEnrollementManagement_AdminRouter = () => {
  return [
    {
      path: "courses",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Courses />} />
        </Suspense>
      ),
    },
    {
      path: "lecture",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Lectures />} />
        </Suspense>
      ),
    },
  ];
};

export default courseEnrollementManagement_AdminRouter;
