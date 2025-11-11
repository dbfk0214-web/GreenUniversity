import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import BasicLayout from "../layouts/Basiclayout";

const Loading = <div>Loading......</div>;
const Manage = lazy(() =>
  import("../pages/authentication_Account_Security/AccountManagementPage")
);

const Member = lazy(() =>
  import("../pages/authentication_Account_Security/MemberInformationPage")
);

const Reset = lazy(() =>
  import("../pages/authentication_Account_Security/ResetPasswordPage")
);

const accountRouter = () => {
  return [
    {
      path: "",
      element: <Navigate replace to="login" />,
    },
    {
      path: "manage",
      element: (
        <Suspense fallback={Loading}>
          <BasicLayout children={<Manage />} />
        </Suspense>
      ),
    },
    {
      path: "member",
      element: (
        <Suspense fallback={Loading}>
          <BasicLayout children={<Member />} />
        </Suspense>
      ),
    },
    {
      path: "reset",
      element: (
        <Suspense fallback={Loading}>
          <BasicLayout children={<Reset />} />
        </Suspense>
      ),
    },
  ];
};

export default accountRouter;
