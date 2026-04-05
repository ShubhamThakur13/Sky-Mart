import { createContext, useState } from "react";

export let  MyContext= createContext();

export let MyContextProvider = ({children}) => {
    const [RegisterUsers, setRegisterUsers] = useState(JSON.parse(localStorage.getItem('Registered Users')) || []);
    const [LoggedUser, setLoggedUser] = useState(null)
   return <MyContext.Provider value={{RegisterUsers, setRegisterUsers,LoggedUser, setLoggedUser}}>{children}</MyContext.Provider>
}