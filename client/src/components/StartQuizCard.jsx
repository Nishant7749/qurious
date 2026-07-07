import { useState } from "react"
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import Result from "../pages/Result";

export default function StartQuizCard({ ques }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [ans, setAns] = useState([])
    const [selectedAns, setSelectedAns] = useState(null)
    const [score, setScore] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    const navigate = useNavigate()
    const { id } = useParams()

    const handleNext = () => {
        if (selectedAns === null) return

        setAns([...ans, selectedAns])
        setCurrentIndex(currentIndex + 1)
        setSelectedAns(null)

    }

    const handleScore = (answers) => {
        let total = 0

        ques.forEach((q, i) => {
            if (answers[i] === (q.correctAnswer - 1)) {
                total++
            }

        });
        setScore(total)

    }

    const handleSubmit = () => {
        if (selectedAns === null) return

        const updatedAnswers = [...ans, selectedAns]
        setAns(updatedAnswers)

        handleScore(updatedAnswers)
        setIsFinished(true)

        // navigate(`/result/${id}`)

    }

    const progress = ((currentIndex + 1) / (ques.length)) * 100




    return (
        <>
            

                {isFinished ? (

                    <div>
                    <Result score={score} ques={ques}/>
                    </div>
                
                ) : (

                    <div className="flex items-center justify-center">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 font-roboto w-1/2 mt-6">
                        <div className="mb-4 mx-3">
                            Question <span className="text-blue-400 font-bold">{currentIndex + 1}</span> of {ques.length}

                            <div className="h-1 bg-gray-700 rounded-full mt-2 w-full">
                                <div className="bg-blue-500 h-1 rounded-full transition-all duration-200" style={{ width: `${progress}%` }}>
                                    {/* progress-bar */}
                                </div>
                            </div>

                        </div>

                        <hr className="text-gray-700 " />

                        <div className="text-2xl my-6 ml-4 font-bold">
                            {ques[currentIndex]?.question}
                        </div>

                        <div>
                            {ques[currentIndex]?.options.map((opt, index) => (
                                <div key={index} onClick={() => setSelectedAns(index)} className={`flex items-center gap-6 p-2 my-2 text-xl mx-3  bg-gray-700/20 border rounded-md cursor-pointer hover:border-blue-500 ${selectedAns === index ? "border-blue-500" : "border-gray-700/50"}`}>
                                    <p className={`border ml-3 border-gray-700/30 rounded-full w-6 h-6 flex items-center justify-center p-4 text-sm ${selectedAns === index ? "bg-blue-500" : "bg-gray-700/50"}`}>{index + 1}</p>
                                    <button>{opt}</button>
                                </div>
                            ))}
                        </div>

                        {currentIndex === ques.length - 1 ? (
                            <div onClick={handleSubmit} className="flex items-center justify-center gap-5 float-right m-4 rounded-md bg-blue-600/80 p-2 border border-blue-500 w-1/5 hover:bg-blue-600 shadow-lg shadow-blue-800 cursor-pointer">
                                <button className="">Submit</button>
                                <FaCheck />
                            </div>
                        ) : (
                            <div onClick={handleNext} className="flex items-center justify-center gap-5 float-right m-4 rounded-md bg-blue-600/80 p-2 border border-blue-500 w-1/5 hover:bg-blue-600 shadow-lg shadow-blue-800 cursor-pointer">
                                <button className="">Next</button>
                                <FaArrowRightLong />
                            </div>
                        )}

                        {isFinished ? (<div>{score}</div>) : (<></>)}



                    </div>
                     </div>

                )}

           
        </>
    )
}