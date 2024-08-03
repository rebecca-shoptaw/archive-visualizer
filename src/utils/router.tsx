import { createHashRouter } from "react-router-dom";

import App from "../App.tsx";
import ErrorPage from "../components/ErrorPage.tsx";
import Visualizer from "../components/Visualizer.tsx";

/**
 * A hash router for the site's pages, used to 
 * dynamically pass the correct content ID to the visualizer,
 * and to link to the custom error page if routing fails.
 */
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
