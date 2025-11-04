import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Mainlayouts from "../../layouts/Mainlayouts";

const Loading = <div>Loading......</div>;
const Attendance = lazy(() =>
  import("../../pages/CourseEnfollementManagement/professor/Attendance")
);
const CancellationAnnouncement = lazy(() =>
  import(
    "../../pages/CourseEnfollementManagement/professor/CancellationAnnouncement"
  )
);
const Classmanagement = lazy(() =>
  import("../../pages/CourseEnfollementManagement/professor/Classmanagement")
);
const ExamNotice = lazy(() =>
  import("../../pages/CourseEnfollementManagement/professor/ExamNotice")
);
const ExtracurricularApplicationStatus = lazy(() =>
  import(
    "../../pages/CourseEnfollementManagement/professor/ExtracurricularApplicationStatus"
  )
);
const GradeEntry = lazy(() =>
  import("../../pages/CourseEnfollementManagement/professor/GradeEntry")
);
const LectureManagement = lazy(() =>
  import("../../pages/CourseEnfollementManagement/professor/LectureManagement")
);
const StudentEvaluation = lazy(() =>
  import("../../pages/CourseEnfollementManagement/professor/StudentEvaluation")
);

const courseEnrollementManagement_ProfessorRouter = () => {
  return [
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
      path: "gradeEntry",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<GradeEntry />} />
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
  ];
};

export default courseEnrollementManagement_ProfessorRouter;
