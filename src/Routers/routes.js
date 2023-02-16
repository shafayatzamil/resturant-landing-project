import { createBrowserRouter } from "react-router-dom";
import Home from "../page/hame/Home";
import Dashboard from "../page/dashboard/Dashboard";
import Orders from "../page/dashboard/Orders";
import Restaurants from "../page/dashboard/Restaurants";
import Drivers from "../page/dashboard/Drivers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children:[
      {
        path:"dashboard/Orders",
        element:<Orders></Orders>
      },
      {
        path:"dashboard/Drivers",
        element:<Drivers></Drivers>
      },
      {
        path:"dasgboard/Restaurants",
        element:<Restaurants></Restaurants>
      }
    ]
  },
]);
export default router;
