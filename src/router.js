import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Login from "./pages/member/Login";
import Signup from "./pages/member/Signup";
import LoginSuccess from "./components/LoginSuccess";
import Count from "./components/Count";
import Detail from "./pages/video/Detail";
import Video from "./pages/video/Video.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "video/:videoCode", element: <Detail /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login-success",
    element: <LoginSuccess />,
  },
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: "/detail/:videoCode",
    element: <Video />,
  },
]);

export default router;
