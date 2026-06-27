const mongoose = require('mongoose')

const quesSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        type: String,
        required: true
    }],
    correct: {
        type: Number, 
        required: true
    }
})

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    questions: [quesSchema],

    description: String,

    category: String,

    difficulty: {
        type: String, 
        enum: ["Easy", "Medium", "Hard"]
    },

    creator: String



}, {timestamps: true})

module.exports = mongoose.model('Quiz', quizSchema)