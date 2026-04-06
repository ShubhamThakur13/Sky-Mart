import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between p-3 bg-black items-center text-white'>
            <div className="logo">
                <div className="flex items-center gap-2">
                    <div className="bg-lime-400 text-black p-2 rounded-lg font-bold">
                        ⚡
                    </div>
                    <h1 className="text-xl font-semibold">
                        Sky<span className="text-lime-400">Mart</span>
                    </h1>
                </div>
            </div>

            <div className="menu flex gap-3">
                <NavLink to={''} className={({ isActive }) => (isActive ? 'text-lime-400' : '')}>Home</NavLink>
                <NavLink to={'/dashboard/shop'} className={({ isActive }) => (isActive ? 'text-lime-400' : '')}>Shop</NavLink>
                <NavLink to={'/dashboard/about'} className={({ isActive }) => (isActive ? 'text-lime-400' : '')}>About</NavLink>
            </div>

            <div className="last flex gap-3">
                <p>Logged Name</p>
                <p>Cart</p>
                <p>Log Out</p>
            </div>
        </div>
    )
}

export default Navbar
