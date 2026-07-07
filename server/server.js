require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')
const QuizRouter = require('./routes/quizRoutes')
const UserRouter = require('./routes/userRoutes')

app.use(cors())
app.use(express.json())
app.use('/quiz', QuizRouter)
app.use('/auth', UserRouter)

connectDB()

app.listen(process.env.PORT, ()=> {
    console.log("SERVER CONNECTED.")
})