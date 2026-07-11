import SidebarCreate from '../../components/SidebarCreate'
import QuizDetails from './QuizDetails'
import CreateQues from './CreateQues'
import PreviewPage from './PreviewPage'
import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
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
        correctAnswer: ""
    }])
    const[currentStep, setCurrentStep] = useState(1)

     const {id} = useParams()

     const location = useLocation()

     useEffect(()=> {
        if(location.pathname.includes('quiz-details')) {
            setCurrentStep(1)
        }
        else if(location.pathname.includes('create-ques')) {
            setCurrentStep(2)
        }
        else if(location.pathname.includes('preview-quiz')) {
            setCurrentStep(3)
        }
        
     }, [location.pathname])

    useEffect(()=> {
        if(!id) return 

        const fetchDetails = async()=> {
            const data = await getQuiz(id)
            const res = data.data
            setQuizData(res)
            
            if(res.questions.length === 0) {
                setQuestions([{
        id: 1,
        question: "",
        options: ["", "", "", ""],
        correctAnswer: ""
    }])
            }
            else{
                setQuestions(res.questions)
            }

            console.log("data in quiz details: ", res)
            console.log("data in questions: ", res.questions)
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