import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Mainlayouts from "../../layouts/Mainlayouts.js";

const Loading = <div>Loading......</div>;
const Attendance = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/professor/Attendance")
  import("../../pages/courseenrollmentmanagement/professor/AttendancePage")
);
const CancellationAnnouncement = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/professor/CancellationAnnouncement")
  import("../../pages/courseenrollmentmanagement/professor/CancellationAnnouncementPage")
);
const Classmanagement = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/professor/Classmanagement")
  import("../../pages/courseenrollmentmanagement/professor/ClassmanagementPage")
);
const ExamNotice = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/professor/ExamNotice")
  import("../../pages/courseenrollmentmanagement/professor/ExamNoticePage")
);
const ExtracurricularApplicationStatus = lazy(() =>
  // import("../../pages/CourseEnrollementManagement/professor/ExtracurricularApplicationStatus")
  import("../../pages/courseenrollmentmanagement/professor/ExtracurricularApplicationStatusPage")
);

const GradeEntry = lazy(() =>
  import("../../pages/gradesAcademicRecords/GradeEntry")
);
const LectureManagement = lazy(() =>
  import("../../pages/courseenrollmentmanagement/professor/LectureManagementPage")
  
);
const StudentEvaluation = lazy(() =>
  import("../../pages/courseenrollmentmanagement/professor/StudentEvaluationPage")
);

const CoursePageProfessor = lazy(() =>
  import("../../pages/courseenrollmentmanagement/professor/CoursePageProfessor")
);

const Courses = lazy(() => 
  import("../../pages/courseenrollmentmanagement/professor/CoursesPage")
);

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
