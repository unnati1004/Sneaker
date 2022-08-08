import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebas";
export const Auth = createContext();
export const AuthContext = ({children})=>{
    const [user,setUser] = useState();
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user)
        })
    },[])
    return <Auth.Provider value={user}>
            {children}
           </Auth.Provider>
}