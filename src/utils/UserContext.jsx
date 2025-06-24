import React, { useState, useEffect} from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) =>{
 const [loginData, setLoginData] = useState("null")

 useEffect(() => {
  const storeData = localStorage.getItem('loginData');
  if(storeData){
    setLoginData(JSON.parse(storeData))
  }
 }, [])


 return(
<UserContext.Provider value={{loginData, setLoginData}}>
    {children}
</UserContext.Provider>
 )
 
}

export default UserContext;