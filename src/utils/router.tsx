import { createBrowserRouter } from "react-router-dom";
import Visualizer from "../components/Visualizer.tsx";
import ErrorPage from "../components/ErrorPage.tsx";
import App from "../App.tsx";

const router = createBrowserRouter([
  {
    path: "/archive-visualizer/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/archive-visualizer/:id",
    element: <Visualizer />,
  },
]);

export default router;
