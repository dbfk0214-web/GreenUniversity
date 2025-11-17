import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Mainlayouts from "../../layouts/Mainlayouts";

const Loading = <div>Loading......</div>;
const Courses = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/admin/Courses")
  import("../../pages/courseenrollmentmanagement/admin/CoursesPage")
);
const Lectures = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/admin/Lectures")
  import("../../pages/courseenrollmentmanagement/admin/LecturesPage")
);
const Curriculum = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/admin/Curriculum")
  import("../../pages/courseenrollmentmanagement/admin/CurriculumPage")
);
const Enrollment = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/admin/Enrollment")
  import("../../pages/courseenrollmentmanagement/admin/EnrollmentPage")
);
const Schedules = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/admin/Schedules")
  import("../../pages/courseenrollmentmanagement/admin/SchedulesPage")
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
