import React, { lazy, Suspense } from "react";
import Mainlayouts from "../layouts/Mainlayouts";

const adminRouter = () => {
  return [
    {
        path:"",
        element:<Suspense fallback={Loading}><Mainlayouts children={<CreditManagement />}/></Suspense>
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

export default adminRouter;
