import { lazy, Suspense } from "react";

import Basiclayout from "../layouts/Basiclayout";
import aboutGreenRouter from "./aboutGreenRouter";
import academicSupportRouter from "./academicSupportRouter";
import admissionEducationRouter from "./admissionEducationRouter";
import campusLifeRouter from "./campusLifeRouter";
import extraServicesRouter from "./extraServicesRouter";
import informationRouter from "./informationRouter";

const {createBrowserRouter} = require("react-router-dom");
const Loading = <div>Loading......</div>;

const Main = lazy(() => import("../pages/MainPage"));


const root = createBrowserRouter([
    {
        path:"",
        element: <Suspense fallback={Loading}><Basiclayout children={<Main />}></Basiclayout></Suspense>
    },
    {
        path:"aboutgreen",
        // element: <Suspense fallback={Loading}><Basiclayout children={<Main />}></Basiclayout></Suspense>,
        // element: <Suspense fallback={Loading}><Main /></Suspense>,
        children: aboutGreenRouter()
    },
    {
        path:"academicsupport",
        // element: <Suspense fallback={Loading}><Basiclayout children={<Main />}></Basiclayout></Suspense>,
        children: academicSupportRouter()
    },
        {
        path:"admissioneducation",
        // element: <Suspense fallback={Loading}><Basiclayout children={<Main />}></Basiclayout></Suspense>,
        children: admissionEducationRouter()
    },
        {
        path:"campuslife",
        // element: <Suspense fallback={Loading}><Basiclayout children={<Main />}></Basiclayout></Suspense>,
        children: campusLifeRouter()
    },
        {
        path:"extraservices",
        // element: <Suspense fallback={Loading}><Basiclayout children={<Main />}></Basiclayout></Suspense>,
        children: extraServicesRouter()
    },
        {
        path:"information",
        // element: <Suspense fallback={Loading}><Basiclayout children={<Main />}></Basiclayout></Suspense>,
        children: informationRouter()
    }
]);

export default root;