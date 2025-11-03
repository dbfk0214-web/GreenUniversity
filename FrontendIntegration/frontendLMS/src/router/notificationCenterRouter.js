import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Mainlayouts from '../layouts/Mainlayouts';

const Loading = <div>Loading......</div>;
const PushNotifications = lazy(() => import("../pages/notificationCenter/PushNotificationsPage"));

const notificationCenterRouter = () => {
  return [
    {
        path:"",
        element:<Navigate replace to="pushnotifications" />   
    },
    {
        path:"pushnotifications",
        element:<Suspense fallback={Loading}><Mainlayouts children={<PushNotifications />}/></Suspense>
    },
  ]
}

export default notificationCenterRouter;
