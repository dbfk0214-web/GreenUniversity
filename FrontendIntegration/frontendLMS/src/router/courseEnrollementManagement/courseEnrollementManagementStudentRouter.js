import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Mainlayouts from "../../layouts/Mainlayouts";

const Loading = <div>Loading......</div>;
const ClassOperation = lazy(() =>
  import("../../pages/courseenrollmentmanagement/student/ClassOperation")
);
const CourseEvaluation = lazy(() =>
  import("../../pages/courseenrollmentmanagement/student/CourseEvaluation")
);
const CourseManagement = lazy(() =>
  import("../../pages/courseenrollmentmanagement/student/CourseManagement")
);
const Courses = lazy(() =>
  import("../../pages/courseenrollmentmanagement/student/Courses")
);
const CreditManagement = lazy(() =>
  import("../../pages/courseenrollmentmanagement/student/CreditManagement")
);
const Report = lazy(() =>
  import("../../pages/courseenrollmentmanagement/student/Report")
);
const ReportCheck = lazy(() =>
  import("../../pages/courseenrollmentmanagement/student/ReportCheck")
);
const Timetable = lazy(() =>
  import("../../pages/courseenrollmentmanagement/student/Timetable")
);

const courseEnrollementManagement_StudentRouter = () => {
  return [
    {
      path: "classoperation",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<ClassOperation />} />
        </Suspense>
      ),
    },
    {
      path: "courseevaluation",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<CourseEvaluation />} />
        </Suspense>
      ),
    },
    {
      path: "coursemanagement",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<CourseManagement />} />
        </Suspense>
      ),
    },
    {
      path: "courses",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Courses />} />
        </Suspense>
      ),
    },
    {
      path: "reportcheck",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<ReportCheck />} />
        </Suspense>
      ),
    },
    {
      path: "report",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Report />} />
        </Suspense>
      ),
    },
    {
      path: "timetable",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Timetable />} />
        </Suspense>
      ),
    },
  ];
};

export default courseEnrollementManagement_StudentRouter;
