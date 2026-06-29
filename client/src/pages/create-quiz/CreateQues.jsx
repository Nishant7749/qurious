import CreateQuesCard from '../../components/CreateQuesCard'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { putQuiz } from "../../services/API";

export default function CreateQues() {
    const [quiz, setQuiz] = useState([])
    const [quesData, setQuesData] = useState([{
        id: 1,
        question: "",
        options: ["", "", "", ""],
        correctAnswer: null
    }])
    const navigate = useNavigate()
    const { id } = useParams()


    const handleQuesChange = (quesIndex, value) => {
        const updatedQues = [...quesData]

        updatedQues[quesIndex].question = value
        setQuesData(updatedQues)
    }

    const handleOptionsChange = (quesIndex, optionIndex, value) => {
        const updatedQues = [...quesData]

        updatedQues[quesIndex].options[optionIndex] = value
        setQuesData(updatedQues)
    }

    const handleCorrectChange = (quesIndex, value) => {
        const updatedQues = [...quesData]

        updatedQues[quesIndex].correctAnswer = value
        setQuesData[updatedQues]
    }


    const handleDelQues = (quesIndex) => {
        const updatedQues = quesData.filter((_, index)=> index !== quesIndex)
        setQuesData(updatedQues)
    }


    const handleAddQues = () => {
        setQuesData((prev) => [...prev, {

            question: "",
            options: ["", "", "", ""],
            correctAnswer: null

        }
        ])
    }

    const handleContinue = async () => {
        try {


            const updatedQuiz = { quesData }

            await putQuiz(id, updatedQuiz)


            navigate(`/preview-quiz/${id}`)


        } catch (error) {
            console.error("Create Ques Error: ", error.message)
        }
    }


    return (
        <>

            <CreateQuesCard quesData={quesData} handleQuesChange={handleQuesChange} handleOptionsChange={handleOptionsChange} handleCorrectChange={handleCorrectChange} handleDelQues={handleDelQues} handleAddQues={handleAddQues} handleContinue={handleContinue} />



        </>
    )
}