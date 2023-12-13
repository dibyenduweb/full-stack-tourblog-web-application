import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile";
import Home from "./components/Home/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import AddBlogs from "./components/Menus/AddBlogs";
import AllBlogs from "./components/Menus/AllBlogs";
import FeatureBlogs from "./components/Menus/FeatureBlogs";
import Wishlist from "./components/Menus/Wishlist";
import Details from "./components/Extrapages/Details";
import Update from "./components/Dashboard/Update";
import WinTicket from "./components/Home/WinTicket";

// import Product from "./components/Home/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assesment-11-tourblog-server.vercel.app/blog')
      },
      {
        path:'details/:id',
        element:<PrivateRoute><Details/></PrivateRoute>,
        loader: () => fetch(`https://assesment-11-tourblog-server.vercel.app/blog`)
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/addblog',
        element:<PrivateRoute><AddBlogs/></PrivateRoute>
      },
      {
        path:'/allblog/',
        element:<PrivateRoute><AllBlogs/></PrivateRoute>,
        loader:() => fetch('https://assesment-11-tourblog-server.vercel.app/blog')
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><Update/></PrivateRoute>,
        loader:({params}) =>{
        return fetch(`https://assesment-11-tourblog-server.vercel.app/blog/${params.id}`);
        }
      },
      {
        path:'/featureblog',
        element:<FeatureBlogs/>,
        loader:()=>fetch('https://assesment-11-tourblog-server.vercel.app/blog')
      },
      {
        path:'/win',
        element: <WinTicket/>
      },

      {
        path:'/wishlist',
        element:<PrivateRoute><Wishlist/></PrivateRoute>,
        loader:()=> fetch('https://assesment-11-tourblog-server.vercel.app/wishlist')
      },
     
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
