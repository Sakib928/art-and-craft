import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import AllCrafts from "./pages/AllCrafts/AllCrafts";
import AddCraft from "./pages/AddCraft/AddCraft";
import MyCrafts from "./pages/MyCrafts/MyCrafts";
import AuthProvider from "./provider/AuthProvider";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-crafts",
        element: (
          <PrivateRoute>
            <MyCrafts></MyCrafts>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
