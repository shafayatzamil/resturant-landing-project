import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./Routers/routes";

//https://capable-concha-d3a78a.netlify.app/---desploy site
// https://resturant-mangement-server.vercel.app/ ---backend deploy site

function App() {
  return (
    <div className="max-w-full mx-auto px-3">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
