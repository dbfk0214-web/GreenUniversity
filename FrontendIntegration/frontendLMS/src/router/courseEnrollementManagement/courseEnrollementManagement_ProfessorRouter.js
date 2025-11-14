import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Mainlayouts from "../../layouts/Mainlayouts";
import CoursePageProfessor from "../../pages/CourseEnrollementManagement/professor/CoursePageProfessor.js";

const Loading = <div>Loading......</div>;
const Attendance = lazy(() =>
  import("../../pages/CourseEnrollementManagement/professor/Attendance")
);
const CancellationAnnouncement = lazy(() =>
  import(
    "../../pages/CourseEnrollementManagement/professor/CancellationAnnouncement"
  )
);
const Classmanagement = lazy(() =>
  import("../../pages/CourseEnrollementManagement/professor/Classmanagement")
);
const ExamNotice = lazy(() =>
  import("../../pages/CourseEnrollementManagement/professor/ExamNotice")
);
const ExtracurricularApplicationStatus = lazy(() =>
  import(
    "../../pages/CourseEnrollementManagement/professor/ExtracurricularApplicationStatus"
  )
);
const GradeEntry = lazy(() =>
  import("../../pages/gradesAcademicRecords/GradeEntry")
);
const LectureManagement = lazy(() =>
  import("../../pages/CourseEnrollementManagement/professor/LectureManagement")
);
const StudentEvaluation = lazy(() =>
  import("../../pages/CourseEnrollementManagement/professor/StudentEvaluation")
);
// const CoursePageProfessor = lazy(() =>
//   import("../../pages/CourseEnrollementManagement/professor/CoursePageProfessor.js")
// );

const courseEnrollementManagement_ProfessorRouter = () => {
  return [
       {
      path: "courseprofessor",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<CoursePageProfessor/>} />
        </Suspense>
      ),
    },
    {
      path: "cancellationannouncement",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<CancellationAnnouncement />} />
        </Suspense>
      ),
    },
    {
      path: "attendance",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Attendance />} />
        </Suspense>
      ),
    },
    {
      path: "classmanagement",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Classmanagement />} />
        </Suspense>
      ),
    },
    {
      path: "examnotice",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<ExamNotice />} />
        </Suspense>
      ),
    },
    {
      path: "extracurricularapplicationStatus",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<ExtracurricularApplicationStatus />} />
        </Suspense>
      ),
    },
    {
      path: "lecturemanagement",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<LectureManagement />} />
        </Suspense>
      ),
    },
    {
      path: "studentevaluation",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<StudentEvaluation />} />
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
  ];
};

export default courseEnrollementManagement_ProfessorRouter;
