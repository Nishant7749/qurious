import {useState} from 'react'
import {Link} from 'react-router-dom'
import { TbFileSmile } from "react-icons/tb";

export default function Navbar() {

    return(
        <>
        <div>

            <nav className='flex items-center justify-between p-5 font-roboto'>
                <div className='flex items-center gap-5'>
                <TbFileSmile className='ml-5 hover:text-white text-blue-500 text-4xl'/>
                <h1 className='font-lobster text-4xl text-blue-400'>Qurious</h1>
                </div>

                <div className='flex text-blue-400 gap-6'>
                    <Link className='cursor-pointer hover:text-blue-500' to="/">Home</Link>
                    <Link className='cursor-pointer hover:text-blue-500' to="/landing">Create</Link>
                    <Link className='cursor-pointer hover:text-blue-500'  to="/my-quiz">My Quiz</Link>
                    <Link className='cursor-pointer hover:text-blue-500'  to="/explore">Explore</Link>
                    <Link className='cursor-pointer hover:text-blue-500'  to="/auth">Login</Link>
                </div>

            </nav>
        </div>
        </>
    )
}