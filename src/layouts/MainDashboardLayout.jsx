import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainDashboardLayout = () => {
    console.log('I am Dashboard');
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    )
}

export default MainDashboardLayout
