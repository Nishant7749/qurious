import StartQuizCard from '../components/StartQuizCard'
import {useEffect, useState} from 'react'
import { getQuiz } from '../services/API'
import { useParams } from 'react-router-dom'

export default function StartQuiz() {
    const[ques, setQues] = useState("")
    const {id} = useParams()

    useEffect(()=> {
        fetchQuiz()
    }, [])

    const fetchQuiz = async()=> {
        const res = await getQuiz(id)
        setQues(res.data.questions)
        console.log("Quiz Fetched.", res.data.questions)
    }

    return(
        <>
        <div>
            <StartQuizCard ques={ques} />
        </div>
        </>
    )
}