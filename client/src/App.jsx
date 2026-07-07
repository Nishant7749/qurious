import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LandingPage from './pages/create-quiz/LandingPage'
import QuizDetails from './pages/create-quiz/QuizDetails'
import CreateQues from './pages/create-quiz/CreateQues'
import PreviewPage from './pages/create-quiz/PreviewPage'
import CreateQuizLayout from './pages/create-quiz/CreateQuizLayout'
import MyQuiz from './pages/MyQuiz'
import StartQuiz from './pages/StartQuiz'
import Result from './pages/Result'

export default function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landing' element={<LandingPage />} />

        <Route path='/create' element={<CreateQuizLayout />} >
          <Route path='/create/quiz-details/:id?' element={<QuizDetails />} />
          <Route path='/create/create-ques/:id' element={<CreateQues />} />
          <Route path='/create/preview-quiz/:id' element={<PreviewPage />} />
        </Route>

        <Route path='/my-quiz' element={<MyQuiz/>} />

        <Route path="/start-quiz/:id" element={<StartQuiz/>} />

        {/* <Route path="/result/:id" element={<Result/>} /> */}


      </Routes>
    </>
  )
}