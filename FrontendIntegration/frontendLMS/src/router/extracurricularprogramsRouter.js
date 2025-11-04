import React, { lazy, Suspense } from "react";
import Mainlayouts from "../layouts/Mainlayouts";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading......</div>;

const ExtracurricularPrograms = lazy(() =>
  import("../pages/extracurricularPrograms/ExtracurricularProgramsPage")
);
const ProgramApplication = lazy(() =>
  import("../pages/extracurricularPrograms/ProgramApplicationPage")
);
const Cancellation = lazy(() =>
  import("../pages/extracurricularPrograms/CancellationPage")
);

const extracurricularprogramsRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts>
            <ExtracurricularPrograms />
          </Mainlayouts>
        </Suspense>
      ),
    },
    {
      path: "programapplication",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts>
            <ProgramApplication />
          </Mainlayouts>
        </Suspense>
      ),
    },
    {
      path: "cancellation",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts>
            <Cancellation />
          </Mainlayouts>
        </Suspense>
      ),
    },
  ];
};

export default extracurricularprogramsRouter;
