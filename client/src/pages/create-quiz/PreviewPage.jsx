import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react'
import { postQuiz, putQuiz } from "../../services/API";

export default function PreviewPage({ quizData, questions }) {

    return (
        <>
            <div className="">
                <div className="flex flex-col items-center justify-center gap-6 shadow-xl shadow-gray-700 rounded-lg p-15 m-5">

                    <h1 className="text-5xl font-roboto font-bold">Review Your Quiz</h1>
                    <p className="text-gray-200">Make sure everything looks good before finally publishing your quiz.</p>

                    <div className="border flex flex-col my-5 gap-3 font-roboto border-gray-800 p-4 rounded-xl w-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold mb-6">Quiz Details</h1>
                            <Link to="/create/quiz-details/:id">
                                <FaRegEdit className="text-xl text-blue-500 cursor-pointer hover:text-blue-600" />
                            </Link>
                        </div>


                        <p className="text-lg w-full flex items-center gap-3">Title <span className="text-sm border border-gray-800 w-full p-1.5 rounded-lg">{quizData.title}</span></p>
                        <p className="text-lg flex items-center gap-3">Creator <span className="text-sm border border-gray-800 w-full p-1.5 rounded-lg">{quizData.creator}</span></p>
                        <p className="text-lg flex items-center gap-3">Description<span className="text-sm border border-gray-800 w-full p-1.5 rounded-lg">{quizData.description}</span></p>
                        <p className="text-lg flex items-center gap-3">Category<span className="text-sm border border-gray-800 w-full p-1.5 rounded-lg">{quizData.category}</span></p>
                        <p className="text-lg flex items-center gap-3">Difficulty <span className="text-sm border border-gray-800 w-full p-1.5 rounded-lg">{quizData.difficulty}</span></p>
                        <p className="text-lg flex items-center gap-3">Language <span className="text-sm border border-gray-800 w-full p-1.5 rounded-lg">{quizData.language}</span></p>

                    </div>

                    <div className="border flex flex-col gap-3 font-roboto border-gray-800 p-4 rounded-xl w-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold mb-6">Check your Questions</h1>
                            <Link to="/create/create-ques/:id">
                                <FaRegEdit className="text-xl text-blue-500 cursor-pointer hover:text-blue-600" />
                            </Link>
                        </div>

                        <div className="flex flex-col gap-2 rounded-lg p-3">
                            {questions.map((ques, index) => (
                                <>
                                    <div className="border border-gray-800 rounded-lg p-4" key={index}>
                                        <h1>Question {index + 1}</h1>
                                        <p className="text-xl border border-blue-700 rounded-lg pl-2">{ques.question}</p>

                                        <div className="flex flex-col">
                                            {ques.options.map((opt, optIndex) => (
                                                <div className="ml-2 mt-2" key={optIndex}>

                                                    <h1 className="border border-gray-800 rounded-full text-center">{opt}</h1>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ))}
                            
                        </div>


                    </div>

                    <div className="bg-blue-700 m-2 w-full p-3 rounded-xl font-roboto flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer border border-blue-500 shadow-blue-900">
                        Publish Quiz
                    </div>
                </div>
            </div>
        </>
    )
}