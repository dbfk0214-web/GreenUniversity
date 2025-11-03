import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Mainlayouts from '../layouts/Mainlayouts';

const Loading = <div>Loading......</div>;
const GradeReport = lazy(() => import("../pages/gradesAcademicRecords/GradeReportPage"));

const gradesAcademicRecordsRouter = () => {
  return [
    {
        path:"",
        element:<Navigate replace to="gradereport" />   
    },
    {
        path:"gradereport",
        element:<Suspense fallback={Loading}><Mainlayouts children={<GradeReport />}/></Suspense>
    },
  ]
}

export default gradesAcademicRecordsRouter;
