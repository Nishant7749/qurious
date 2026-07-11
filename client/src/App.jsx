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
import Explore from './pages/Explore'
import AuthLayout from './pages/authentication/AuthLayout'
import ProtectedRoute from './utils/ProtectedRoute'

export default function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landing' element={<LandingPage />} />

        <Route path='/create' element={
          <ProtectedRoute>
            <CreateQuizLayout />
          </ProtectedRoute>
        }
        >
          <Route path='/create/quiz-details/:id?' element={<QuizDetails />} />
          <Route path='/create/create-ques/:id' element={<CreateQues />} />
          <Route path='/create/preview-quiz/:id' element={<PreviewPage />} />
        </Route>

        <Route path='/my-quiz' element={
          <ProtectedRoute>
          <MyQuiz />
        </ProtectedRoute>} />

        <Route path="/start-quiz/:id" element={<StartQuiz />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/auth" element={<AuthLayout />} />


      </Routes>
    </>
  )
}