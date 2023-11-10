import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Details from "../page/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
