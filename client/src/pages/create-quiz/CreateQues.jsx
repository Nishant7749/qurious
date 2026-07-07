import CreateQuesCard from '../../components/CreateQuesCard'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { putQuiz } from "../../services/API";

export default function CreateQues({ setCurrentStep, questions, setQuestions }) {

    const navigate = useNavigate()
    const { id } = useParams()


    const handleQuesChange = (quesIndex, value) => {
        const updatedQues = [...questions]

        updatedQues[quesIndex].question = value
        setQuestions(updatedQues)
    }

    const handleOptionsChange = (quesIndex, optionIndex, value) => {
        const updatedQues = [...questions]

        updatedQues[quesIndex].options[optionIndex] = value
        setQuestions(updatedQues)
    }

    const handleCorrectChange = (quesIndex, value) => {
        const updatedQues = [...questions]

        updatedQues[quesIndex].correctAnswer = value
        setQuestions(updatedQues)
    }


    const handleDelQues = (quesIndex) => {
        const updatedQues = questions.filter((_, index) => index !== quesIndex)
        setQuestions(updatedQues)
    }


    const handleAddQues = () => {
        setQuestions((prev) => [...prev, {

            question: "",
            options: ["", "", "", ""],
            correctAnswer: ""

        }
        ])
        console.log("Added Ques")
    }

    const handleContinue = async () => {
        try {


            const updatedQuiz = { questions }

            await putQuiz(id, updatedQuiz)

            console.log("Added All Ques. Successfully!")
            console.log("updatedQuz: ", updatedQuiz)
            console.log("questions: ", questions)
            navigate(`/create/preview-quiz/${id}`)


        } catch (error) {
            console.error("Create Ques Error: ", error.message)
        }
    }


    return (
        <>

            <CreateQuesCard setCurrentStep={setCurrentStep} questions={questions} handleQuesChange={handleQuesChange} handleOptionsChange={handleOptionsChange} handleCorrectChange={handleCorrectChange} handleDelQues={handleDelQues} handleAddQues={handleAddQues} handleContinue={handleContinue} />



        </>
    )
}