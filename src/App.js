import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./Routers/routes";

function App() {
  return (
    <div className="max-w-full mx-auto px-3">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
