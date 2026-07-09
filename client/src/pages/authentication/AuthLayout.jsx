import Register from "./Register"
import Login from "./Login"
import AuthSVG from '../../assets/auth.svg'
import { useState } from "react"

export default function AuthLayout() {
    const[tabActive, setTabActive] = useState("register")

    return (
        <>
            <div className="flex items-center justify-center">
                <div className='border border-gray-700 w-2/3 m-8 rounded-md flex'>

                    <div className='flex flex-col w-1/2 items-center p-6 bg-gray-950 rounded-md'>
                        <h1 className='text-4xl text-blue-500 font-bold mb-3'>Qurious</h1>
                        <p className='text-lg mb-10 text-gray-200'>Create.Play.Learn.</p>

                        <div>
                            <img src={AuthSVG} alt='auth image' className='relative z-10 w-72' />
                            <div className='absolute z-0 top-60 w-56 h-56 bg-blue-500 rounded-full shadow-xl blur-3xl shadow-blue-500'></div>
                        </div>

                        <p className='text-xs mt-4 text-gray-200'>Join the our community building amazing quizzes.</p>
                    </div>

                    <div className='w-0.5 bg-gray-800'></div>

                    <div className="w-1/2 flex items-center flex-col justify-center">
                        <div className='flex items-center gap-20 p-2'>

                            <button onClick={()=> setTabActive("register")} className={`text-lg p-2 cursor-pointer ${tabActive === "register" ? "border-blue-500 border-b ": "border-none"}`}>Register</button>

                            <button onClick={()=> setTabActive("login")} className={`text-lg p-2 cursor-pointer ${tabActive === "login" ? "border-blue-500 border-b ": "border-none"}`}>Login</button>
                        </div>

                        {tabActive === "register" ? <Register setTabActive={setTabActive} /> : <Login setTabActive={setTabActive} />}
                    </div>

                </div>
            </div>
        </>
    )
}