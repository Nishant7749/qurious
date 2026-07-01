import SidebarCreate from '../../components/SidebarCreate'
import QuizDetails from './QuizDetails'
import CreateQues from './CreateQues'
import PreviewPage from './PreviewPage'
import { useState } from 'react'


export default function CreateQuizLayout() {
    const[quizData, setQuizData] = useState([
        {
        title: "",
        description: "",
        creator: "",
        category: "",
        difficulty: "",
        language: "",
        }
    ])
    const [questions, setQuestions] = useState([{
        id: 1,
        question: "",
        options: ["", "", "", ""],
        correctAnswer: null
    }])
    const[currentStep, setCurrentStep] = useState(1)



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