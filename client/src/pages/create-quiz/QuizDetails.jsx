import QuizDetailsCard from '../../components/QuizDetailsCard'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postQuiz } from "../../services/API";


export default function QuizDetails() {
    const [quizData, setQuizData] = useState({
        title: "",
        description: "",
        creator: "",
        category: "",
        difficulty: "",
        language: ""
    })
    const navigate = useNavigate()

    const handleChange = async (e) => {
        e.preventDefault()

        const { name, value } = e.target
        setQuizData((prev) => ({ ...prev, [name]: value }))

    }

    const handleSave = async() => {
        try {
         
            const res = await postQuiz(quizData)
            console.log(quizData)
            console.log(res)

            navigate(`/create-ques/${res.data._id}`)

            console.log("Quiz Details Saved")
        } catch (error) {
            console.error("Quiz Details Error: ", error.message)
        }
    }



    return (
        <>
            <QuizDetailsCard handleChange={handleChange} quizData={quizData} handleSave={handleSave} />
        </>
    )
}