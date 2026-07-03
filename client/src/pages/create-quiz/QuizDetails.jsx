import QuizDetailsCard from '../../components/QuizDetailsCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getQuiz, postQuiz } from "../../services/API";


export default function QuizDetails({setCurrentStep, quizData, setQuizData}) {
   
    const navigate = useNavigate()

    const handleChange = async (e) => {
        e.preventDefault()

        const { name, value } = e.target
        setQuizData((prev) => ({ ...prev, [name]: value }))

    }

    const handleSave = async () => {
        try {

            const res = await postQuiz({...quizData, status: "draft"})

            navigate(`/create/create-ques/${res.data._id}`)
            console.log("quiz data details : ", res.data)

            console.log("Quiz Details Saved")
        } catch (error) {
            console.error("Quiz Details Error: ", error.message)
        }
    }



    return (
        <>
            <div className=''>

                <QuizDetailsCard setCurrentStep={setCurrentStep} handleChange={handleChange} quizData={quizData} handleSave={handleSave} />
            </div>
        </>
    )
}