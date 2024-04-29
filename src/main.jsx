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
import UpdatePage from "./pages/UpdatePage/UpdatePage";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import SubCategoryDetails from "./pages/SubCategoryDetails/SubCategoryDetails";

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
      {
        path: "/update/:_id",
        element: (
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <ItemDetails></ItemDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params._id}`),
      },
      {
        path: "/crafts/:subCategory",
        element: <SubCategoryDetails></SubCategoryDetails>,
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
