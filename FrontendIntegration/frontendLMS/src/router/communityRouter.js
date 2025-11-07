import { lazy, Suspense } from "react";

import Mainlayouts from "../layouts/Mainlayouts";


const Loading = <div>Loading......</div>;
const Club = lazy(() => import("../pages/community/ClubPage"));
const Department = lazy(() => import("../pages/community/DepartmentPage"));
const Free = lazy(() => import("../pages/community/FreePage"));
const QaA = lazy(() => import("../pages/community/QaAPage"));
const Question = lazy(() => import("../pages/community/QuestionPage"));
const Chatbot = lazy(() => import("../pages/community/ChatbotPage"));
const CommunityList = lazy(() => import("../pages/community/CommunityListPage"));



const communityRouter = () => {
  return [
   {
      path: "community/",
      element: (
        <Suspense fallback={Loading}>
          <Mainlayouts>
            <communityRouter />
          </Mainlayouts>
        </Suspense>
      ),
    },
    {
        path:"club",
        element:<Suspense fallback={()=><Loading/>}><Mainlayouts children={<Club />}/></Suspense>
    },
      {
        path:"entire",
        element:<Suspense fallback={()=><Loading/>}><Mainlayouts children={<Club />}/></Suspense>
    },
    {
        path:"department",
        element:<Suspense fallback={()=><Loading/>}><Mainlayouts children={<Department />}/></Suspense>
    },
    {
        path:"free",
        element:<Suspense fallback={()=><Loading/>}><Mainlayouts children={<Free />}/></Suspense>
    },
    {
        path:"qanda",
        element:<Suspense fallback={()=><Loading/>}><Mainlayouts children={<QaA />}/></Suspense>
    },
    {
        path:"question",
        element:<Suspense fallback={()=><Loading/>}><Mainlayouts children={<Question />}/></Suspense>
    },
        {
        path:"chatbot",
        element:<Suspense fallback={()=><Loading/>}><Mainlayouts children={<Chatbot />}/></Suspense>
    },
     {
        path:"commentList",
        element:<Suspense fallback={()=><Loading/>}><Mainlayouts children={<CommunityList />}/></Suspense>
    }
  ];
};

export default communityRouter;
