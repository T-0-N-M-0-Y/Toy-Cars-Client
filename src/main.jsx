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
import AllToysDetails from './Components/ToyCollection/AllToysDetails.jsx';
import UpdateToy from './Components/ToyCollection/UpdateToy.jsx';
import Error from './Components/Authentication/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
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
        loader: () => fetch("https://assignment-11-car-toy-market-server.vercel.app/newtoy")
      },
      {
        path: "/alltoydetails/:id",
        element: <PrivateRoutes><AllToysDetails></AllToysDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://assignment-11-car-toy-market-server.vercel.app/newtoy/${params.id}`)
      },
      {
        path: "/mytoys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
        loader: () => fetch("https://assignment-11-car-toy-market-server.vercel.app/newtoy")
      },
      {
        path: "/addtoys",
        element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/updatetoy/:id",
        element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://assignment-11-car-toy-market-server.vercel.app/newtoy/${params.id}`)
      },
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
