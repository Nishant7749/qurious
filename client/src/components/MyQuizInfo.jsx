import { RiEditLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import { delQuiz } from "../services/API";

export default function MyQuizInfo({ quiz, setQuizzes }) {
    const navigate = useNavigate()

    const handleStart = (id) => {
        navigate(`/start-quiz/${id}`)
     }

    const handleEdit = (id) => {
        navigate(`/create/quiz-details/${id}`)
     }

    const handleDel = async(id) => {
        await delQuiz(id)
        setQuizzes((prev)=> prev.filter(q=> q._id !== id))
    }


    return (
        <>
            <div className="">

                <div className="flex items-center justify-between gap-5 border border-gray-800 p-5 rounded-xl mt-5">
                    <div>
                        <h1 className="text-xl capitalize">{quiz.title}</h1>
                        <div className="flex gap-3 items-center">
                            <p>{quiz.questions.length} questions</p>
                            <div className="w-1 h-1 rounded-full bg-blue-700"></div>
                            <p>{quiz.category}</p>
                        </div>
                    </div>

                    <div className="h-10 rounded-full w-0.5 bg-gray-800"></div>

                    <div className="flex gap-10 items-center">
                        <div onClick={()=> handleStart(quiz._id)} className="flex items-center gap-3 text-green-600 border border-green-700/20 p-2 rounded-xl hover:bg-green-700/10 cursor-pointer">
                            <FaPlay className="" />
                            <label className="text-sm">Start</label>
                        </div>

                        <div onClick={()=> handleEdit(quiz._id)} className="flex items-center gap-3 text-yellow-600 border border-yellow-700/20 p-2 rounded-xl hover:bg-yellow-700/10 cursor-pointer">
                            <RiEditLine className="" />
                            <label className="text-sm">Edit</label>
                        </div>

                        <div onClick={()=> handleDel(quiz._id)} className="flex items-center gap-3 text-red-700 border border-red-700/20 p-2 rounded-xl hover:bg-red-700/10 cursor-pointer">
                            <RiDeleteBin6Line className="" />
                            <label className="text-sm">Delete</label>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}