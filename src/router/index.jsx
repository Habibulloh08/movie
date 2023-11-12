import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Details from "../page/Details";
import ErrorPage from "../page/ErrorPage";
import SerchMovie from "../components/SerchMovie";
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
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/search-movie",
    element: <SerchMovie />
  },
]);

export default router;
