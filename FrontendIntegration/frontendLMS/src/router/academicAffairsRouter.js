import { lazy, Suspense } from "react";
import Mainlayouts from "../layouts/Mainlayouts";

const Loading = <div>Loading...</div>;

// lazy load
const AcademicAffairsPage = lazy(() =>
  import("../pages/academicAffairs/AcademicAffairsPage")
);
const CreditManagementPage = lazy(() =>
  import("../pages/academicAffairs/creditManagement/CreditManagementPage")
);
const DegreeCertificatesPage = lazy(() =>
  import("../pages/academicAffairs/degreeCertificates/DegreeCertificatesPage")
);

const gradesAcademicRecords = lazy(() => import("../pages/gradesAcademicRecords/gradesAcademicRecords"));

const academicAffairsRouter = () => [
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Mainlayouts>
          <gradesAcademicRecords />
        </Mainlayouts>
      </Suspense>
    ),
  },
  {
    path: "creditmanagement",
    element: (
      <Suspense fallback={Loading}>
        <Mainlayouts>
          <CreditManagementPage />
        </Mainlayouts>
      </Suspense>
    ),
  },
  {
    path: "degreecertificates",
    element: (
      <Suspense fallback={Loading}>
        <Mainlayouts>
          <DegreeCertificatesPage />
        </Mainlayouts>
      </Suspense>
    ),
  },
];

export default academicAffairsRouter;
