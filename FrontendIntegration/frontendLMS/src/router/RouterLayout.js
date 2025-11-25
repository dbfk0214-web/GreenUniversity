import { Suspense } from "react";
import Mainlayouts from "../layouts/Mainlayouts";
import HomeByRole from "../components/HomebyRole";
import { BrowserRouter } from "react-router-dom";

const Loading = <div>Loading...</div>;

const RouterLayout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={Loading}>
        <Mainlayouts>{children}</Mainlayouts>
      </Suspense>
      <Routes
        path="/"
        element={
          <Mainlayouts role={role}>
            <HomeByRole role={role} />
          </Mainlayouts>
        }
      ></Routes>
    </div>
  );
};

export default RouterLayout;
