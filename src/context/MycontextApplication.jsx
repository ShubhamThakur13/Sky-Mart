import { createContext, useState } from "react";

export let  MyContext= createContext();

export let MyContextProvider = ({children}) => {
    const [RegisterUsers, setRegisterUsers] = useState(JSON.parse(localStorage.getItem('Registered Users')) || []);
    const [LoggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem('Logged User'))|| null)
    const [Products, setProducts] = useState([]);
    const [Productdetiles, setProductdetiles] = useState({});
   return <MyContext.Provider value={{RegisterUsers, setRegisterUsers,LoggedUser, setLoggedUser,Products, setProducts,Productdetiles, setProductdetiles}}>{children}</MyContext.Provider>
}