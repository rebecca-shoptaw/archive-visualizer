import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./globals.css";
import ErrorPage from "./components/ErrorPage.tsx";
import Visualizer from "./components/Visualizer.tsx";

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
