import { RegisterUser } from '../../services/API'
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from 'react';

export default function Register({setTabActive}) {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[showPass, setShowPass] = useState(false)

    const handleRegister = async(e)=> {
        try {
            e.preventDefault()
            await RegisterUser({email, password})
            alert("Registered.")

        } catch (error) {
            console.log("Register Error")
        }
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center font-roboto'>
                

                <div className='h-0.5 bg-gray-800 w-full'></div>

                <h1 className='text-4xl font-bold my-2'>Register</h1>

                    <form onSubmit={handleRegister} className='flex p-6 flex-col gap-6 items-center justify-center'>

                        <div className='flex flex-col gap-2 w-full'>
                            <label className='text-lg'>Email</label>
                            <div className='bg-gray-800 border flex items-center gap-3 border-gray-700 rounded-md p-2 focus:border-blue-500'>
                            <IoMdPerson className='text-lg text-gray-300'/>
                            <input className='outline-none w-full' type="text" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                        <label className='text-lg'>Password</label>
                        <div className='bg-gray-800 border flex items-center gap-3 border-gray-700 rounded-md p-2 focus:border-blue-500'>
                            <RiLockPasswordLine className='text-lg text-gray-300' />
                            <input className='outline-none w-full' type={showPass ? "text" : "password"} placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} />

                            <AiOutlineEye onClick={() => setShowPass(!showPass)} className='text-xl text-gray-300 hover:text-white cursor-pointer' />

                        </div>
                    </div>

                        <button type='submit' className='border border-blue-400 mt-5 cursor-pointer rounded-md p-2 bg-blue-500/80 w-full hover:bg-blue-500'>Register</button>

                        <div className='h-0.5 bg-gray-800 w-full'></div>

                        <div>
                            <p className='text-gray-400'>Already have an account?<button type='button' onClick={()=> setTabActive("login")} className='text-blue-500 cursor-pointer'>Login</button></p>
                        </div>
                    </form>
                </div>
            

        </>
    )
}