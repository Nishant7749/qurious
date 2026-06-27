const express = require('express')
const router = express.Router()

const {postQuiz, getQuizes, putQuiz, deleteQuiz} = require('../controller/quizController')

router.post('/', postQuiz)
router.get('/', getQuizes)

router.put('/:id', putQuiz)
router.delete('/:id', deleteQuiz)

module.exports = router