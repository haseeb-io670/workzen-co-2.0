import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services.jsx";
import IndustriesMain from "../pages/IndustriesMain";
import BlogsPage from "../pages/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    index:true,
    element: <Home />
  },
  {
    path: "/about-us",
    // index:true,
    element: <AboutUs />
  },
  {
    path: "/industries-details",
    // index:true,
    element: <IndustriesMain />
  },
  {
    path: "/blogs",
    // index:true,
    element: <BlogsPage />
  },
  {
    path: "/services",
    element: <Services />,
    children: [
      {
        index:true,
        path: "dashboard",
        // element: <Dashboard></Dashboard>,
      },
      {
        path: "chats",
        // element: <Chats></Chats>,
        children: [
          {
            path: ":chatId",
            // element: <SinglePersonChat />,
          },
        ],
      },
    ],
  },
]);

export default router;
