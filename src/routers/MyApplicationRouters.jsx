import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';

const MyApplicationRouters = () => {
    let router = createBrowserRouter([
        {path: "/",
            element: <AuthLayout/>,
            children:[
            {
                path:'',
                element: <Login/>
            },

            {
                path: 'register',
                element: <Register/>
            }
        ]
        }
    ]);
  return (<RouterProvider router={router}/>)
}

export default MyApplicationRouters
