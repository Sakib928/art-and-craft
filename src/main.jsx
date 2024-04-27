import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import AllCrafts from "./pages/AllCrafts/AllCrafts";
import AddCraft from "./pages/AddCraft/AddCraft";
import MyCrafts from "./pages/MyCrafts/MyCrafts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-crafts",
        element: <AllCrafts></AllCrafts>,
      },
      {
        path: "/add-craft",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/my-crafts",
        element: <MyCrafts></MyCrafts>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
