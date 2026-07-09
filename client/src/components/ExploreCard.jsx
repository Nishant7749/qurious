import { MdFavoriteBorder } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import { MdOutlinePerson4 } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ExploreCard({quizes}) {
    const navigate = useNavigate()

    const handlePlay = (id)=> {
        navigate(`/start-quiz/${id}`)
    }

    return (
        <>
        <div className="flex gap-10">

            {quizes.map((quiz)=> (

            <div className="flex font-roboto flex-col p-3 gap-2 items-center justify-center bg-gray-800 border border-gray-700 rounded-xl">

                <h1 className="text-xl capitalize">{quiz.title}</h1>

                <div className="flex items-center justify-center gap-2 my-2 text-gray-400">

                    <div className="border border-gray-700 rounded-md p-2 text-xs">{quiz.difficulty}</div>
                    <div className="h-1 w-1 bg-blue-500 animate-pulse rounded-full"></div>
                    <div className="border border-gray-700 rounded-md p-2 text-xs">{quiz.questions.length} questions</div>
                    <div className="h-1 w-1 bg-blue-500 animate-pulse rounded-full"></div>
                    <div className="border border-gray-700 p-2 text-xs rounded-md">{quiz.category}</div>
                </div>

                <div className="text-gray-400 flex items-center gap-2 border border-gray-700 rounded-md text-xs p-2">
                    <MdOutlinePerson4 className="text-lg"/>
                    {quiz.creator}
                </div>

                <div className="h-0.5 w-full bg-gray-700 my-2"></div>

                <div className="flex items-center gap-6">
                    <button onClick={()=> handlePlay(quiz._id)} className="bg-blue-600 p-2 cursor-pointer flex items-center justify-center gap-2  rounded-md w-20 text-xs hover:bg-blue-500/80 hover:shadow-sm border border-blue-500 hover:shadow-blue-500">Play<FaPlay/></button>

                    <div className="text-xl text-gray-300 hover:text-white cursor-pointer"><MdFavoriteBorder/></div>

                    <div className="text-xl text-gray-300 hover:text-white cursor-pointer"><GoShareAndroid/></div>
                </div>
                
            </div>

            ))}

        </div>
        </>
    )
}