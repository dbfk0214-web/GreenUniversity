import { RouterProvider } from "react-router-dom";
import router from "./router/root";          // ← root가 default export라면 이렇게
import CursorLayer from "../src/layouts/cursorlayout"; // 아까 만든 커서 레이어

function App() {
  return (
    <>
      <CursorLayer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
