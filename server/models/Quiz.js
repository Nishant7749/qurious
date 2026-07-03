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

    language: String,

    creator: String,

    status: {
        type: String,
        enum: ["draft", "published"],
        default: "draft"
    }


}, {timestamps: true})

module.exports = mongoose.model('Quiz', quizSchema)