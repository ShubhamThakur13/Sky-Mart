import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { MyContext } from '../context/MycontextApplication'

const AuthRouterProtect = () => {
    console.log('hello');
    
    let {LoggedUser} = useContext(MyContext);

    if(LoggedUser){
      return <Navigate to={'/dashboard'}/>
    }
  return (<Outlet/>)
}

export default AuthRouterProtect
