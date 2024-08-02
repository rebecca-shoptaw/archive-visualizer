import { createHashRouter } from "react-router-dom";
import Visualizer from "../components/Visualizer.tsx";
import ErrorPage from "../components/ErrorPage.tsx";
import App from "../App.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <Visualizer />,
  },
]);

export default router;
