import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RecruiterLogIn from "./pages/RecruiterLogIn"
import LogIn from './pages/Login'
import Jobs from './pages/Jobs/Jobs'
import Registration from './pages/Registration'
import { useState, useEffect } from "react"
import { AuthContext } from './contexts/AuthContext'
import { auth, onAuthStateChanged, User } from "./common/firebaseConfig"

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={user}>
       <>
        <Router>
          <Navigation />
            <Routes>
              <Route path="/job-board" element={<Home/>} />
              <Route path="/job-board/recruiter-login" element={<RecruiterLogIn />} />
              <Route path="/job-board/login" element={<LogIn />} />
              <Route path="/job-board/jobs" element={<Jobs />} />
              <Route path="/job-board/register" element={<Registration />} />
            </Routes>
          <Footer />
        </Router>
      </>
    </AuthContext.Provider>
  )
}

export default App
