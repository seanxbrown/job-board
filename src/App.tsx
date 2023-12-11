import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/job-board" element={<Home/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
