import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRouter from './ProtectedRouter';
import MainDashboardLayout from '../layouts/MainDashboardLayout';
import Home from '../pages/Home';
import AuthRouterProtect from './AuthRouterProtect';
import About from '../pages/About';
import Shop from '../pages/Shop';
import ProductDetiles from '../components/ProductDetiles';

const MyApplicationRouters = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <AuthRouterProtect />,
            children: [{
                path: '',
                element: <AuthLayout />,
                children: [
                    {
                        path: '',
                        element: <Login />
                    },

                    {
                        path: 'register',
                        element: <Register />
                    }
                ]
            }
            ]
        },

        {
            path: '/dashboard',
            element: <ProtectedRouter />,
            children: [{
                path: '',
                element: <MainDashboardLayout />,
                children: [
                    {
                        path: '',
                        element: <Home />
                    },

                     {
                        path: '/dashboard/shop',
                        element: <Shop />
                    },

                     {
                        path: '/dashboard/about',
                        element: <About />
                    }

                ]
            }]
        },

        {
            path: '/dashboard/shop/product/:id',
            element: <ProductDetiles />
        }
    ]);
    return (<RouterProvider router={router} />)
}

export default MyApplicationRouters
