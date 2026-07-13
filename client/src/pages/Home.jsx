import { useState } from 'react'
import Exams from '../assets/exams.svg'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { SlPeople } from "react-icons/sl";
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div className='flex flex-col'>
                    <div className='m-8 '>
                        <h1 className='font-roboto font-bold mt-20 mb-5 text-6xl'>Turn Curiosity into Competition.</h1>
                        <h1 className='font-roboto w-4/5 text-lg text-gray-200'>Every question unlocks a challenge. Every answer earns progress. Create quizzes, compete with friends, and become the ultimate champion</h1>
                    </div>
                    <div className='flex gap-4 ml-8'>
                        <button className='bg-[#6366F1] p-3 w-40 rounded-xl cursor-pointer shadow-md shadow-black hover:bg-[#0F172A] hover:border hover:border-[#6366F1]'><Link to="/landing">Create Quiz</Link></button>
                        <button className='border border-[#6366F1] w-40 p-3 rounded-xl shadow-md shadow-black hover:bg-[#6366F1] cursor-pointer'><Link to="/my-quiz">Take a Quiz</Link></button>
                    </div>
                    </div>

                    <img className="w-1/3 h-1/3" src={Exams} alt="animated svg" />
                </div>

                <div className='rounded-xl bg-gray-800/30 flex items-center justify-center mx-60 mt-0 gap-10 p-4 font-roboto'>
                        <div className='flex items-center justify-center'>
                            <BsFillLightningChargeFill className='text-[#6366F1] text-3xl mr-3'/>
                            <h1>Easy to Create</h1>
                        </div>
                        <div className='flex items-center justify-center'>
                            <IoGameControllerOutline className='text-[#6366F1] text-3xl mr-3'/>
                            <h1>Fun to Play</h1>
                        </div>
                        <div className='flex items-center justify-center'>
                            <GiProgression className='text-[#6366F1] text-3xl mr-3'/>
                            <h1>Track Progress</h1>
                        </div>
                        <div className='flex items-center justify-center'>
                            <SlPeople className='text-[#6366F1] text-3xl mr-3'/>
                            <h1>Share & Grow</h1>
                        </div>
                    </div>

                

                
            </div>
        </>
    )
}