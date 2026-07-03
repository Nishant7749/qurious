import SidebarCreate from '../../components/SidebarCreate'
import QuizDetails from './QuizDetails'
import CreateQues from './CreateQues'
import PreviewPage from './PreviewPage'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getQuiz } from '../../services/API'


export default function CreateQuizLayout() {
    const[quizData, setQuizData] = useState([
        {
        title: "",
        description: "",
        creator: "",
        category: "",
        difficulty: "",
        language: "",
        status: ""
        }
    ])
    const [questions, setQuestions] = useState([{
        id: 1,
        question: "",
        options: ["", "", "", ""],
        correctAnswer: null
    }])
    const[currentStep, setCurrentStep] = useState(1)

     const {id} = useParams()

    useEffect(()=> {
        if(!id) return 

        const fetchDetails = async()=> {
            const data = await getQuiz(id)
            setQuizData(data.data)
            setQuestions(data.data.questions)

            console.log("data in quiz details: ", data.data)
            console.log("data in questions: ", data.data.questions)
        }
        fetchDetails()
    }, [id])
    



    return(
        <>
        <div className='flex items-center justify-center'>

            <SidebarCreate currentStep={currentStep} />

            <div className=''>

            {currentStep === 1 && (
                <QuizDetails setCurrentStep={setCurrentStep} quizData={quizData} setQuizData={setQuizData} />
            )}

            {currentStep === 2 && (
                <CreateQues setCurrentStep={setCurrentStep} questions={questions} setQuestions={setQuestions} />
            )}

            {currentStep === 3 && (
                <PreviewPage setCurrentStep={setCurrentStep} quizData={quizData} questions={questions} />
            )}

            </div>
        </div>
        </>
    )
}