import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({children}) {

    const[user, setUser] = useState({
        token: localStorage.getItem("token"),
        email: localStorage.getItem("email")
    })

    const login = (token, email)=> {
        localStorage.setItem("token", token)
        localStorage.setItem("email", email)

        setUser({token, email})
    }

    const logout = ()=> {
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        
        setUser({token: null, email: null})
    }


    return(
        <AuthContext.Provider value={{user, login, logout}}>
          {children}
        </AuthContext.Provider>
    )
}


export const useAuth = ()=> useContext(AuthContext)