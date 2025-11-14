import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Mainlayouts from "../../layouts/Mainlayouts";

const Loading = <div>Loading......</div>;
const Courses = lazy(() =>
  import("../../pages/CourseEnrollementManagement/admin/Courses")
);
const Lectures = lazy(() =>
  import("../../pages/CourseEnrollementManagement/admin/Lectures")
);
const Curriculum = lazy(() =>
  import("../../pages/CourseEnrollementManagement/admin/Curriculum")
);
const Enrollment = lazy(() =>
  import("../../pages/CourseEnrollementManagement/admin/Enrollment")
);
const Schedules = lazy(() =>
  import("../../pages/CourseEnrollementManagement/admin/Schedules")
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
    {
      path: "curriculum",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Curriculum />} />
        </Suspense>
      ),
    },
    {
      path: "enrollment",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Enrollment />} />
        </Suspense>
      ),
    },
    {
      path: "schedules",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Schedules />} />
        </Suspense>
      ),
    },
  ];
};

export default courseEnrollementManagement_AdminRouter;
