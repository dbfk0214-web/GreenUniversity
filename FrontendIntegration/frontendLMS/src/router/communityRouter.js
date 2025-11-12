// src/router/communityRouter.js
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";

const Loading = <div>Loading......</div>;

const Club = lazy(() => import("../pages/community/ClubPage"));
const Department = lazy(() => import("../pages/community/DepartmentPage"));
const Free = lazy(() => import("../pages/community/FreePage"));
const QaA = lazy(() => import("../pages/community/QaAPage"));
const Chatbot = lazy(() => import("../pages/community/ChatbotPage"));
const CommunityList = lazy(() =>
  import("../pages/community/CommunityListPage")
);
const Mentoringinfo = lazy(() =>
  import("../components/community/Mentoringinfo")
);
const Entrie = lazy(() => import("../pages/community/EntriePage"))
const CommunityPage = lazy(() => import("../pages/community/CommunityPage"))

const communityRouter = () => [
  {
    path: "/community",
    element: (
      <Suspense fallback={Loading}>
        <Mainlayouts>
          <Outlet />
        </Mainlayouts>
      </Suspense>
    ),
    children: [
      { path: "", element: <Entrie /> },
      { path: "community", element: <CommunityPage /> },
      { path: "club", element: <Club /> },
      { path: "department", element: <Department /> },
      { path: "free", element: <Free /> },
      { path: "qanda", element: <QaA /> },
      { path: "chatbot", element: <Chatbot /> },
      { path: "commentList", element: <CommunityList /> },
      { path: "mentoringinfo", element: <Mentoringinfo /> }, // 소문자 경로 추천
    ],
  },
];

export default communityRouter;
