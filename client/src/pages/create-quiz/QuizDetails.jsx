import { BiCategory } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import {Link} from 'react-router-dom'
import {useState} from 'react'


export default function QuizDetails() {
    const[quizData, setQuizData] = useState({
        title: "",
        description: "",
        creator: "",
        category: "",
        difficulty: "",
        language: ""
    })

    


    return (
        <>
            <div className="flex items-center justify-center font-roboto">
                <div className="flex flex-col gap-6 shadow-xl shadow-gray-700 rounded-lg p-15 m-5">
                    <h1 className="text-5xl text-center font-bold">Create <span className="text-blue-400">Quiz</span></h1>
                    <p className="text-gray-200 text-xl text-center mb-8">Tell us about your quiz.</p>

                    <div className="flex flex-col gap-1">
                        <label>Quiz Title</label>
                        <input className="bg-gray-800/50 p-2 rounded-xl outline-none border border-gray-800 focus:border-blue-700" type="text" placeholder="Enter quiz title" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Description</label>
                        <input className="bg-gray-800/50 p-2 pb-10 rounded-xl outline-none border border-gray-800 focus:border-blue-700" type="text" placeholder="Enter quiz description" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Created By</label>
                        <input className="bg-gray-800/50 p-2 rounded-xl outline-none border border-gray-800 focus:border-blue-700" type="text" placeholder="Enter your name" />
                    </div>

                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                            <BiCategory className="text-blue-600 text-xl" />
                            <label>Category</label>
                            </div>
                            <select className="bg-gray-800/50 p-2 rounded-xl text-gray-400 outline-none border border-gray-800 focus:border-blue-700">
                                <option value="">Select Category</option>
                                <option value=""></option>
                            </select>
                        </div >

                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                            <BsBarChart className="text-blue-600 text-xl" />
                            <label>Difficulty</label>
                            </div>
                            <select className="bg-gray-800/50 p-2 text-gray-400 rounded-xl outline-none border border-gray-800 focus:border-blue-700">
                                <option value="">Select Difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                            <GrLanguage className="text-blue-600 text-xl"/>
                            <label>Language</label>
                            </div>
                            <select className="bg-gray-800/50 text-gray-400 p-2 rounded-xl outline-none border border-gray-800 focus:border-blue-700">
                                <option value="">Select Language</option>
                                <option value="English">English</option>
                                <option value="Spanish">Spanish</option>
                                <option value="German">German</option>
                                <option value="French">French</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Punjabi">Punjabi</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Urdu">Urdu</option>
                                <option value="Arabic">Arabic</option>
                                <option value="Chinese">Chinese</option>
                            </select>
                        </div>

                    </div>

                    <button className="p-3 rounded-xl cursor-pointer bg-[#6366F1] mt-10 shadow-lg shadow-blue-900 hover:bg-[#4F46E5]"><Link to='/create-ques'>Save & Continue</Link></button>


                </div>
            </div>
        </>
    )
}