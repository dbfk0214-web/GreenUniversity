import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import BasicLayout from "../layouts/Basiclayout";
import Mainlayouts from "../layouts/Mainlayouts";

const Loading = <div>Loading......</div>;
const account = lazy(() =>
  import("../pages/authentication_Account_Security/accountPage")
);
const Login = lazy(() =>
  import("../pages/authentication_Account_Security/LoginPage")
);
const Logout = lazy(() =>
  import("../pages/authentication_Account_Security/LogoutPage")
);
const Manage = lazy(() =>
  import("../pages/authentication_Account_Security/AccountManagementPage")
);

const Member = lazy(() =>
  import("../pages/authentication_Account_Security/MemberInformationPage")
);

const Reset = lazy(() =>
  import("../pages/authentication_Account_Security/ResetPasswordPage")
);

const Sign = lazy(() =>
  import("../pages/authentication_Account_Security/SignUpPage")
);

const accountRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<account />} />
        </Suspense>
      ),
    },
    {
      path: "login",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Login />} />
        </Suspense>
      ),
    },
    {
      path: "logout",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Logout />} />
        </Suspense>
      ),
    },
    {
      path: "manage",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Manage />} />
        </Suspense>
      ),
    },
    {
      path: "member",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Member />} />
        </Suspense>
      ),
    },
    {
      path: "reset",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Reset />} />
        </Suspense>
      ),
    },
    {
      path: "sign",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts children={<Sign />} />
        </Suspense>
      ),
    },
  ];
};

export default accountRouter;
