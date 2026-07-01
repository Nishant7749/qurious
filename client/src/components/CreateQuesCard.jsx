import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CreateQuesCard({setCurrentStep, questions, handleQuesChange, handleOptionsChange, handleCorrectChange, handleDelQues, handleAddQues, handleContinue }) {
console.log(questions)
    return (
        <>

            <div className="flex items-center justify-center">
                <div className="flex p-8 shadow-lg rounded-xl shadow-gray-700 flex-col gap-8 font-roboto">
                    <div>
                        <h1 className="text-4xl">Add Questions</h1>
                        <p className="text-gray-200">Add questions to your quiz. Each question must have 4 options with 1 correct answer.</p>
                    </div>


                    {questions.map((q, index) => (
                        <div key={index}>


                            <div className="flex flex-col bg-gray-600/10 p-8 rounded-md gap-8 ">
                                <div className="flex flex-col">
                                    <div className="flex ml-2 mr-3 justify-between mb-1 items-center">
                                        <h1>Question {index+1}</h1>
                                        <RiDeleteBin6Line onClick={()=> handleDelQues(index)} className="text-xl hover:text-red-400 cursor-pointer" />
                                    </div>
                                    <input className="bg-gray-800/50 w-full p-2 rounded-xl outline-none border border-gray-800 focus:border-blue-700" value={q.question} onChange={(e)=> handleQuesChange(index, e.target.value)} type="text" placeholder="Enter your question here" />
                                </div>


                                <div className="flex flex-col items-center mx-5 justify-center gap-3">

                                    {q.options.map((option, optionIndex)=> (
                                        <div key={optionIndex}>

                                    <div className="flex justify-between items-center w-full gap-3">
                                        <input className="bg-gray-800/50 rounded-md outline-none border p-2 px-5 w-full border-gray-800 focus:border-blue-700" value={option} onChange={(e)=> handleOptionsChange(index, optionIndex, e.target.value)} type="text" placeholder={`Enter option ${optionIndex+1}`} />
                                        
                                    </div>

                                    </div>

                                    ))}

                                </div>

                                <div className="flex items-center justify-center gap-3">
                                    <label className="">Correct Option</label>
                                    <input className="bg-green-500 w-70 p-2 rounded-md" value={q.correctAnswer} onChange={(e)=> handleCorrectChange(index, e.target.value)} type="number" placeholder="Enter correct option number" />
                                </div>

                                <div className="flex items-center border-2 border-gray-700 justify-center mx-40 gap-2 bg-gray-800 hover:bg-gray-700 cursor-pointer p-2">
                                    <FaPlus />
                                    <button onClick={handleAddQues} className="cursor-pointer">Add Question</button>
                                </div>

                            </div>


                        </div>
                    ))}

                    <div className="w-full bg-gray-800 h-0.5"></div>
                    <div className="flex justify-between items-center">

                        <button className="bg-gray-800 hover:bg-gray-700 cursor-pointer p-2 px-8 rounded-md"><Link to="/create/quiz-details">Back</Link></button>

                        <button onClick={()=> {handleContinue(); setCurrentStep(prev => prev+1)}} className="p-3 rounded-xl cursor-pointer bg-[#6366F1] shadow-lg shadow-blue-900 hover:bg-[#4F46E5]">Save & Continue</button>
                    </div>

                </div>
            </div>




        </>
    )
}