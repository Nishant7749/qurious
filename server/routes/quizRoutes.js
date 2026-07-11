const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/authMiddlware')

const {postQuiz, getQuizes, getQuiz, putQuiz, deleteQuiz} = require('../controller/quizController')

router.post('/',verifyToken, postQuiz)
router.get('/', getQuizes)
router.get('/:id', getQuiz)
router.put('/:id', verifyToken, putQuiz)
router.delete('/:id',verifyToken, deleteQuiz)

module.exports = router