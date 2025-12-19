import { lazy, Suspense } from "react";
import Mainlayouts from "../layouts/Mainlayouts";

const ProfessorHomeDashboard = lazy(() =>
  import("../components/professor/ProfessorHomeDashboard")
);

const Course = lazy(() => import("../pages/professor/Course"));
const Extra = lazy(() => import("../pages/professor/Extra"));
const Grade = lazy(() => import("../pages/professor/Grade"));
const Support = lazy(() => import("../pages/professor/Support"));
const Account = lazy(() => import("../pages/professor/Account"));
const Assignment = lazy(() => import("../pages/professor/Assignment"));
const Attendance = lazy(() => import("../pages/professor/Attendance"));

export const professorRouter = [
  {
    path: "",
    element: <Mainlayouts children={<ProfessorHomeDashboard />} />,
  },
  {
    path: "assignment",
    element: (
      <Suspense>
        <Mainlayouts children={<Assignment />} />
      </Suspense>
    ),
  },
  {
    path: "course",
    element: (
      <Suspense>
        <Mainlayouts children={<Course />} />
      </Suspense>
    ),
  },
  {
    path: "extra",
    element: (
      <Suspense>
        <Mainlayouts children={<Extra />} />
      </Suspense>
    ),
  },
  {
    path: "grade",
    element: (
      <Suspense>
        <Mainlayouts children={<Grade />} />
      </Suspense>
    ),
  },
  {
    path: "attendance",
    element: (
      <Suspense>
        <Mainlayouts children={<Attendance />} />
      </Suspense>
    ),
  },
  {
    path: "support",
    element: (
      <Suspense>
        <Mainlayouts children={<Support />} />
      </Suspense>
    ),
  },
  {
    path: "account",
    element: (
      <Suspense>
        <Mainlayouts children={<Account />} />
      </Suspense>
    ),
  },
];
