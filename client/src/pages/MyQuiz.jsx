import MyQuizCard from "../components/MyQuizCard"
import { useState, useEffect } from "react"
import { getQuizes } from "../services/API"

export default function MyQuiz() {
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        fetchQuizzes()
    }, [])

    const fetchQuizzes = async () => {
        const res = await getQuizes()
        setQuizzes(res.data)
        console.log("Quiz Fetched into MyQuiz as: ", res.data)
    }


    return (
        <>
           

                <MyQuizCard setQuizzes={setQuizzes} quizzes={quizzes} />

          
        </>
    )
}