import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineDone } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import MyQuizInfo from "./MyQuizInfo";
import {Link} from "react-router-dom";

export default function MyQuizCard({quizzes, setQuizzes}) {

    const published = quizzes.filter(q => q.status === "published")
    const draft = quizzes.filter(q => q.status === "draft")


    return (
        <>
            <div className="font-roboto flex flex-col mx-30 mt-10 justify-center">
                <div className="flex items-center justify-between gap-20">
                    <div>
                    <h1 className="text-6xl font-bold">My Quizzes</h1>
                    <p className="text-gray-200">Manage and track your quizzes here.</p>
                    </div>

                    <button className="bg-blue-700 m-2 p-3 rounded-xl font-roboto flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer border border-blue-500 shadow-blue-900"><Link to="/create/quiz-details">Create New Quiz</Link></button>


                </div>

                <div className="flex items-center justify-center mb-5 mt-10 gap-5">

                   <div className="flex items-center w-1/3 justify-center gap-6 bg-gray-800 border border-gray-700 rounded-xl p-4">
                    <HiSquare3Stack3D className="text-purple-500 text-5xl border border-purple-900/50 bg-purple-700/20  rounded-full p-2"/>
                    <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl">{quizzes.length}</h1>
                    <p className="text-gray-300 text-sm">Total Quizzes</p>
                    </div>
                   </div>

                   <div className="flex items-center w-1/3 justify-center gap-6 bg-gray-800 border border-gray-700 rounded-xl p-4">
                    <MdOutlineDone className="text-green-500 text-5xl border border-green-900/50 bg-green-700/20  rounded-full p-2"/>
                    <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl">{published.length}</h1>
                    <p className="text-gray-300 text-sm">Published</p>
                    </div>
                   </div>

                   <div className="flex items-center w-1/3 justify-center gap-6 bg-gray-800 border border-gray-700 rounded-xl p-4">
                    <RiEditLine className="text-yellow-500 text-5xl border border-yellow-900/50 bg-yellow-700/20  rounded-full p-2"/>
                    <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl">{draft.length}</h1>
                    <p className="text-gray-300 text-sm">Drafts</p>
                    </div>
                   </div>


                </div>

                

                <div className="">

                {quizzes.map((quiz)=> (
                    <MyQuizInfo key={quiz._id} quiz={quiz} setQuizzes={setQuizzes} />
                ))}

                </div>

                </div>

               
        </>
    )
}