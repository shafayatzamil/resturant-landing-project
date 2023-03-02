import { createBrowserRouter } from "react-router-dom";
import Home from "../page/hame/Home";
import Dashboard from "../page/dashboard/Dashboard";
import Orders from "../page/dashboard/Orders";
import Restaurants from "../page/dashboard/Restaurants";
import Drivers from "../page/dashboard/Drivers";
import Products from "../page/dashboard/Products";
import Mainpage from "../page/dashboard/Mainpage";
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
        path:'dashboard/mainpage',
        element:<Mainpage></Mainpage>
      },
      {
        path:"dashboard/Orders",
        element:<Orders></Orders>
      },
      {
        path:"dashboard/Drivers",
        element:<Drivers></Drivers>
      },
      {
        path:"dashboard/Restaurants",
        element:<Restaurants></Restaurants>
      },
      {
        path:"dashboard/Products",
        element:<Products></Products>
      }
    ]
  },
]);
export default router;
