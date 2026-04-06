import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MycontextApplication';

const Navbar = () => {
   let {LoggedUser} = useContext(MyContext);
 let navigate =   useNavigate();
    return (
        <div className='flex justify-between p-3 bg-black items-center text-white'>
            <div className="logo" onClick={()=> navigate('/dashboard')}>
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
                <p className='p-2 border text-xs rounded-xl'>{LoggedUser.name}</p>
                <p className='p-2 border text-xs rounded-xl active:scale-95 cursor-pointer'><i class="ri-shopping-cart-2-line"></i></p>
                <p  className='p-2 border text-xs rounded-xl hover:bg-red-400 active:scale-95 cursor-pointer'><i class="ri-logout-box-r-line"></i></p>
            </div>
        </div>
    )
}

export default Navbar
