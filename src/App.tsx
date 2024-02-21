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
import { RoleContext } from './contexts/RoleContext'
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile"

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<"candidate" | "recruiter" | null>(null)

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }else {
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={user}>
      <RoleContext.Provider value={role}>
       <>
        <Router>
          <Navigation setRole={setRole}/>
            <Routes>
              <Route path="/job-board" element={<Home/>} />
              <Route path="/job-board/recruiter-login" element={<RecruiterLogIn setRole={setRole}/>} />
              <Route path="/job-board/login" element={<LogIn setRole={setRole}/>} />
              <Route path="/job-board/jobs" element={<Jobs />} />
              <Route path="/job-board/register" element={<Registration setRole={setRole}/>} />
              <Route path="/job-board/update-profile" element={<UpdateProfile/>} />
            </Routes>
          <Footer />
        </Router>
        </>
      </RoleContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
