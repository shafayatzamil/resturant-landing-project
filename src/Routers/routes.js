import { createBrowserRouter } from "react-router-dom";
import Home from "../page/hame/Home";
import Dashboard from "../page/dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);
export default router;
