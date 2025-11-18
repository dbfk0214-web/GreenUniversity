import { Suspense } from "react";
import Mainlayouts from "../layouts/Mainlayouts";

const Loading = <div>Loading...</div>;

const RouterLayout = ({ children }) => {
  return (
    <Suspense fallback={Loading}>
      <Mainlayouts>{children}</Mainlayouts>
    </Suspense>
  );
};

export default RouterLayout;
