import { createBrowserRouter } from "react-router-dom";
import Barre from "./barre/barre";
import Home from "./home/home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Barre",
    element: <Barre />,
  },
]);
export default Router;
