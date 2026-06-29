const Quiz = require('../models/Quiz')

const postQuiz = async(req, res)=> {
    try {
        const{title, questions, description, category, difficulty, creator, language} = req.body
        if(!title || !description || !category || !difficulty || !creator || !language) {
            res.status(404).json({message: "All fields are required! [title, questions, description, category, difficulty, creator]"})
        }

        const newQuiz = await Quiz.create(req.body)

        res.status(201).json({message: "Quiz Created Successfully!", data: newQuiz})

    } catch (error) {
        res.status(500).json({message: "Server-Side Error!", error: error.message})
    }
}


const getQuizes = async(req, res)=> {
    try {
        const quiz = await Quiz.find()

        res.status(201).json({message: "Fetched All Quizes Successfully!", data: quiz})

    } catch (error) {
         res.status(500).json({message: "Server-Side Error!", error: error.message})
    }
}


const putQuiz = async(req, res)=> {
    try {  
        const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.status(201).json({message: "Quiz Updated Successfully!", data: updatedQuiz})

    } catch (error) {
         res.status(500).json({message: "Server-Side Error!", error: error.message})
    }
}


const deleteQuiz = async(req, res)=> {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id)

        res.status(201).json({message: "Quiz Deleted Successfully!"})

    } catch (error) {
         res.status(500).json({message: "Server-Side Error!", error: error.message})
    }
}







module.exports = {postQuiz, getQuizes, putQuiz, deleteQuiz}