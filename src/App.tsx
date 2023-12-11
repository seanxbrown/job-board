import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RecruiterLogIn from "./pages/RecruiterLogIn"

function App() {

  return (
    <>
      
      <Router>
        <Navigation />
          <Routes>
            <Route path="/job-board" element={<Home/>} />
            <Route path="/job-board/recruiter-login" element={ <RecruiterLogIn />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
