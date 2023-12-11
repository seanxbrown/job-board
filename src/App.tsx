import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RecruiterLogIn from "./pages/RecruiterLogIn"
import LogIn from './pages/Login'

function App() {

  return (
    <>
      <Router>
        <Navigation />
          <Routes>
            <Route path="/job-board" element={<Home/>} />
            <Route path="/job-board/recruiter-login" element={ <RecruiterLogIn />} />
            <Route path="/job-board/login" element={ <LogIn />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
