const express = require('express')
const router = express.Router()

const {postQuiz, getQuizes, getQuiz, putQuiz, deleteQuiz} = require('../controller/quizController')

router.post('/', postQuiz)
router.get('/', getQuizes)
router.get('/:id', getQuiz)
router.put('/:id', putQuiz)
router.delete('/:id', deleteQuiz)

module.exports = router