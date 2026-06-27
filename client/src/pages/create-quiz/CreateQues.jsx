import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CreateQues() {

    return (
        <>

            <div className="flex items-center justify-center">
                <div className="flex p-8 shadow-lg rounded-xl shadow-gray-700 flex-col gap-8 font-roboto">
                    <div>
                        <h1 className="text-4xl">Add Questions</h1>
                        <p className="text-gray-200">Add questions to your quiz. Each question must have 4 options with 1 correct answer.</p>
                    </div>

<div className="flex flex-col bg-gray-600/10 p-8 rounded-md gap-8 ">
                    <div className="flex flex-col">
                        <div className="flex ml-2 mr-3 justify-between mb-1 items-center">
                        <h1>Question 1</h1>
                         <RiDeleteBin6Line className="text-xl hover:text-red-400 cursor-pointer"/>
                         </div>
                        <input className="bg-gray-800/50 w-full p-2 rounded-xl outline-none border border-gray-800 focus:border-blue-700" type="text" placeholder="Enter your question here" />
                    </div>

                    <div className="flex flex-col items-center mx-5 justify-center gap-3">
                        <div className="flex justify-between items-center w-full gap-3">
                        <input className="bg-gray-800/50 rounded-md outline-none border p-2 px-5 w-full border-gray-800 focus:border-blue-700" type="text" placeholder="Enter option 1" />
                        <RiDeleteBin6Line className="text-xl hover:text-red-400 cursor-pointer"/>
                        </div>

                        <div className="flex justify-between items-center w-full gap-3">
                        <input className="bg-gray-800/50 rounded-md outline-none border p-2 px-5 w-full border-gray-800 focus:border-blue-700" type="text" placeholder="Enter option 2" />
                        <RiDeleteBin6Line className="text-xl hover:text-red-400 cursor-pointer"/>
                        </div>

                        <div className="flex justify-between items-center w-full gap-3">
                        <input className="bg-gray-800/50 rounded-md outline-none border p-2 px-5 w-full border-gray-800 focus:border-blue-700" type="text" placeholder="Enter option 3" />
                        <RiDeleteBin6Line className="text-xl hover:text-red-400 cursor-pointer"/>
                        </div>

                        <div className="flex justify-between items-center w-full gap-3">
                        <input className="bg-gray-800/50 rounded-md outline-none border p-2 px-5 w-full border-gray-800 focus:border-blue-700" type="text" placeholder="Enter option 4" />
                        <RiDeleteBin6Line className="text-xl hover:text-red-400 cursor-pointer"/>
                        </div>

                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <label className="">Correct Option</label>
                        <input className="bg-green-500 w-70 p-2 rounded-md" type="number" placeholder="Enter correct option number" />
                    </div>

                    <div className="flex items-center border-2 border-gray-700 justify-center mx-40 gap-2 bg-gray-800 hover:bg-gray-700 cursor-pointer p-2">
                        <FaPlus />
                        <button className="cursor-pointer">Add Question</button>
                    </div>

                    </div>

                    <div className="w-full bg-gray-800 h-0.5"></div>
                    <div className="flex justify-between items-center">

                        <button className="bg-gray-800 hover:bg-gray-700 cursor-pointer p-2 px-8 rounded-md"><Link to="/quiz-details">Back</Link></button>

                        <button className="p-3 rounded-xl cursor-pointer bg-[#6366F1] shadow-lg shadow-blue-900 hover:bg-[#4F46E5]"><Link to='/quiz-preview'>Save & Continue</Link></button>
                    </div>

                </div>
            </div>
        </>
    )
}