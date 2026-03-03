import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Component/Pages/Home";
import About from "../Component/Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);

export default router;
