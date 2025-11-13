// src/router/communityRouter.js
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";

const Loading = <div>Loading......</div>;

const Club = lazy(() => import("../components/community/ClubPageComponent"));
const Department = lazy(() => import("../components/community/DepartmentPageComponent"));
const Free = lazy(() => import("../components/community/FreePageComponent"));
const QaA = lazy(() => import("../components/community/QaAPageComponent"));
const Chatbot = lazy(() => import("../pages/community/ChatbotPage"));
const CommunityList = lazy(() =>
  import("../components/community/CommunityListPageComponent")
);
const Mentoringinfo = lazy(() =>
  import("../components/community/Mentoringinfo")
);
const Entrie = lazy(() => import("../components/community/EntriePageComponent"))
const CommunityPage = lazy(() => import("../components/community/CommunityPageComponent"))
const DataShareBoardPage = lazy(() => import("../components/community/DataSharingPageComponent"))
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
      { path: "mentoringinfo", element: <Mentoringinfo /> },
      { path: "dataSharing", element: <DataShareBoardPage /> },  // 소문자 경로 추천
    ],
  },
];

export default communityRouter;
