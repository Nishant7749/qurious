import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export default function ProfileMenu() {
    const[click, setClick] = useState(false)
    const navigate = useNavigate()
    const {user, logout} = useAuth()

    const handleClick = ()=> {
        setClick(!click)
    }

    const handleLogout = ()=> {
        
        logout()
        
        console.log("Logged Out")
        navigate('/')
    }

    

    return (
        <>
        <div>
            <div onClick={handleClick} className={`flex relative text-sm text-gray-200 items-center justify-center gap-3 bg-gray-800 border rounded-md p-1.5 hover:border-blue-600 cursor-pointer ${click ? "border-blue-600": "border-gray-700"}`}>
                <IoPersonCircleSharp  className="text-2xl"/>
                {user.email}
            </div>

            {click ? (
                
                <div className={`absolute text-gray-200 flex flex-col items-center justify-center gap-6 bg-gray-800/50 border-gray-700 border rounded-md top-14 border-t-0 rounded-t-none p-4 transition-all duration-300 ${click ? "translate-y-0" : "-translate-y-40"}`}>
                    <Link to='/landing' className="hover:text-blue-400" >Create Quiz</Link>
                    <Link to='/my-quiz' className="hover:text-blue-400" >My Quiz</Link>
                    {/* <Link to='/auth/register' className="hover:text-blue-400" >Switch Account</Link> */}
                    <button onClick={handleLogout} className="border-red-500/60 cursor-pointer hover:bg-red-500/70 hover:border-red-500/80 bg-red-500/50 p-2 rounded-md text-sm border">Logout</button>
                </div>

            ) : (

            <div></div>

            )}


        </div>
        </>
    )
}