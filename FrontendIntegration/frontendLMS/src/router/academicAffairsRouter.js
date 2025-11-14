import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Mainlayouts from '../layouts/Mainlayouts';

const Loading = <div>Loading......</div>;
const CreditManagement = lazy(() => import("../pages/academicAffairs/CreditManagementPage"));
const DegreeCertificates = lazy(() => import("../pages/academicAffairs/DegreeCertificatesPage"));
const academicAffairs = lazy(() => import("../pages/academicAffairs/academicAffairsPage"))

const academicAffairsRouter = () => {
  return [
    {
        path:"",
        element:<Suspense fallback={Loading}><Mainlayouts children={<academicAffairs />}/></Suspense>
    },
    {
        path:"creditmanagement",
        element:<Suspense fallback={Loading}><Mainlayouts children={<CreditManagement />}/></Suspense>
    },
    {
        path:"degreecertificates",
        element:<Suspense fallback={Loading}><Mainlayouts children={<DegreeCertificates />}/></Suspense>
    },
  ]
}

export default academicAffairsRouter
