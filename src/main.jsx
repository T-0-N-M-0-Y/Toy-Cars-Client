import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Login from './Components/Authentication/Login.jsx';
import Signup from './Components/Authentication/Signup.jsx';
import AuthProvider from './Components/AuthProviders/AuthProvider.jsx';
import MyToys from './Components/ToyCollection/MyToys.jsx';
import AddToys from './Components/ToyCollection/AddToys.jsx';
import Blogs from './Components/Blogs.jsx';
import AllToys from './Components/ToyCollection/AllToys.jsx';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/newtoy")
      },
      {
        path: "/mytoys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: "/addtoys",
        element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
