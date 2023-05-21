import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Pages/Error';
import Main from './Pages/Main';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AuthProvider from './Provider/AuthProvider';
import Blog from './Pages/Blog';
import AllToys from './Pages/AllToys';
import ToyDetails from './Pages/ToyDetails';
import AddAToy from './Pages/AddAToy';
import MyToys from './Pages/MyToys';
import PrivateRoute from './Pages/PrivateRoute';
import UpdateToy from './Pages/UpdateToy';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
      },
      {
        path: 'allToys/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://dolls-toy-server.vercel.app/allToys/${params.id}`)
      },
      {
        path: 'addAToy',
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: 'myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader : ({params}) => fetch(`https://dolls-toy-server.vercel.app/allToys/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
