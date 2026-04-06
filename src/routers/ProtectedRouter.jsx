import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { MyContext } from '../context/MycontextApplication';
import { toast } from 'react-toastify';

const ProtectedRouter = () => {

let {LoggedUser} =    useContext(MyContext);

if(!LoggedUser){
    toast.error('Unauthorized User')
    return <Navigate to={'/'} />
}
  return (<Outlet/>)
}

export default ProtectedRouter
