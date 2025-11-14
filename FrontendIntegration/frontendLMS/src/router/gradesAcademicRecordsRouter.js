import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import GradePage from "../pages/gradesAcademicRecords/gradePage";

const Loading = <div>Loading......</div>;

const Grade = lazy(() =>
  import("../pages/gradesAcademicRecords/GradeReportPage")
);
const check = lazy(() => import("../pages/gradesAcademicRecords/check"));
const print = lazy(() => import("../pages/gradesAcademicRecords/print"));
const report = lazy(() => import("../pages/gradesAcademicRecords/report"));

const gradesAcademicRecordsRouter = () => {
  return [
    {
      path: "gradepage",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<GradePage />} />
        </Suspense>
      ),
    },
    {
      path: "gradereport",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Grade />} />
        </Suspense>
      ),
    },
    {
      path: "check",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<check />} />
        </Suspense>
      ),
    },
    {
      path: "print",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<print />} />
        </Suspense>
      ),
    },
    {
      path: "report",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<gradepage />} />
        </Suspense>
      ),
    },
  ];
};

export default gradesAcademicRecordsRouter;
