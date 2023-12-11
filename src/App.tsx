import './App.css'
import Navigation from './components/Navigation'
import Search from './components/Search'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navigation />
      <Router>
      <Routes>
        <Route path="/job-board" element={<Search/>} />
      </Routes>
        
      </Router>
      
      <Footer />
    </>
  )
}

export default App
