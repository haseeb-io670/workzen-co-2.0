import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    index:true,
    element: <Home />
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
