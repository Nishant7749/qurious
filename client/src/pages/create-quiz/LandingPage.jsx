import book from '../../assets/book.png'
import { GoPlusCircle } from "react-icons/go";
import { LuArrowRight } from "react-icons/lu";
import {Link} from 'react-router-dom'

export default function LandingPage() {

    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div className='mb-10 flex items-center justify-center'>
                    <img className='w-2/3' src={book} alt="book" />
                </div>

                <h1 className='font-syne text-6xl'>Ask.Create.<span className='text-blue-500'>Inspire.</span></h1>

                <div className='flex items-center gap-3 justify-center bg-[#6366F1] p-3 rounded-xl text-lg font-roboto mt-10 hover:bg-[#4F46E5] cursor-pointer border border-[#4F46E5] shadow-md shadow-[#6366F1]'>
                    <GoPlusCircle className='text-xl hover:text-2xl transition-all duration-200' />
                    <button className=''><Link to='/create/quiz-details'>Create a Quiz</Link></button>
                    <LuArrowRight className='text-xl' />
                </div>
            </div>
        </>
    )
}