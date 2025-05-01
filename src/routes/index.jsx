import { createBrowserRouter } from "react-router-dom";
import Test from "../Test";

const router = createBrowserRouter([
  {
    path: "/",
    index:true,
    element: <Test />
  },
  {
    path: "/admin",
    // element: <AdminLayout></AdminLayout>,
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
