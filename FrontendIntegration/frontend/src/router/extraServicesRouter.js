import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import BasicLayout from "../layouts/Basiclayout";

const Loading = <div>Loading......</div>;
const Chatbot = lazy(() => import("../pages/extraServices/ChatbotPage"));
const Donate = lazy(() => import("../pages/extraServices/DonatePage"));

const extraServicesRouter = () => {
  return [
    {
      path: "",
      element: <Navigate replace to="campusGuidePage" />,
    },
    {
      path: "chatbot",
      element: (
        <Suspense fallback={Loading}>
          <BasicLayout children={<Chatbot />} />
        </Suspense>
      ),
    },
    {
      path: "donate",
      element: (
        <Suspense fallback={Loading}>
          <BasicLayout children={<Donate />} />
        </Suspense>
      ),
    },
  ];
};

export default extraServicesRouter;
