import { lazy, Suspense } from "react";
import Mainlayouts from "../layouts/Mainlayouts";

const StudentHomeDashboard = lazy(() =>
  import("../components/student/StudentHomeDashboard")
);

const Academic = lazy(() => import("../pages/student/Academic"));
const Course = lazy(() => import("../pages/student/Course"));
const Extra = lazy(() => import("../pages/student/Extra"));
const Grade = lazy(() => import("../pages/student/Grade"));
const Support = lazy(() => import("../pages/student/Support"));
const Community = lazy(() => import("../pages/student/Community"));
const Account = lazy(() => import("../pages/student/Account"));

export const studentRouter = [
  {
    path: "",
    element: <Mainlayouts children={<StudentHomeDashboard />} />,
  },
  {
    path: "academic",
    element: (
      <Suspense>
        <Mainlayouts children={<Academic />} />
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
    path: "support",
    element: (
      <Suspense>
        <Mainlayouts children={<Support />} />
      </Suspense>
    ),
  },
  {
    path: "community",
    element: (
      <Suspense>
        <Mainlayouts children={<Community />} />
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
