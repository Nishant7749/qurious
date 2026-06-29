import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LandingPage from './pages/create-quiz/LandingPage'
import QuizDetails from './pages/create-quiz/QuizDetails'
import CreateQues from './pages/create-quiz/CreateQues'
import PreviewPage from './pages/create-quiz/PreviewPage'

export default function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-quiz' element={<LandingPage/>} />
        <Route path='/quiz-details' element={<QuizDetails/>} />
        <Route path='/create-ques/:id' element={<CreateQues/>} />
        <Route path='/preview-quiz' element={<PreviewPage/>} />
      </Routes>
    </>
  )
}