import { useState, useEffect, useContext, useRef } from 'react'
import Container from "react-bootstrap/Container"
import { UserAccount } from '../../common/types'
import { doc, getDoc, db } from "../../common/firebaseConfig";
import { AuthContext } from '../../contexts/AuthContext';
import Button from "react-bootstrap/Button"
import UpdateProfileModal from './UpdateProfileModal';
import Card from "react-bootstrap/Card"

const UpdateProfile = () => {
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null)
  const [editing, setEditing] = useState<{display: boolean, section: null | string}>({display: false, section: null})
  const user = useContext(AuthContext)
  const contactRef = useRef(null)

  function closeModal(): void {
    const defaultStatus = {
      display: false,
      section: null
    }
    setEditing(defaultStatus)
  }

  function openModal(type: string) {
    const openObject = {
      display: true,
      section: type
    }
    setEditing(openObject)

  }

  async function getProfileDetails() {
    if (!user) {
      alert("Unable to retrieve profile details - no auth.")
      return
    } else {
      try {
        const docRef = doc(db, "users", user.uid)
        const userProfile = await getDoc(docRef);

        if (userProfile.exists()) {
          const profileData = userProfile.data() as UserAccount
          setCurrentUser({...profileData})
        } else {
          throw new Error("Profile data not found")
        }
        
      } catch(e) {
        alert(e)
      }
      
    }
  }

  useEffect(() => {
    getProfileDetails()

  }, [])
  
  return (
    <Container id="update-page-container">
      { editing.display && <UpdateProfileModal userInfo={currentUser} statusObject={editing} handleClose={closeModal} getProfileDetails={getProfileDetails} /> }
      <h4>Your Profile</h4>
      <Card id="profile-page-contact">
        <Card.Body>
          <Card.Title>
            <h5>Contact</h5>
            <Button type="button" ref={contactRef} onClick={() => openModal("contact")}>Edit</Button>
          </Card.Title>
          <p className="fw-bold">Name</p><p>{currentUser?.firstName} {currentUser?.lastName}</p>
          <p className="fw-bold">Title</p><p>{currentUser?.jobTitle}</p>
          <p className="fw-bold">Location</p> <p>{currentUser?.city} {currentUser?.country}</p>
          <p className="fw-bold">Number</p><p>{currentUser?.contactNumber}</p>
          <p className="fw-bold">Email</p><p>{currentUser?.email}</p>
        </Card.Body>
      </Card>
      <Card id="profile-page-looking-for">
        <Card.Body>
          <Card.Title>
            <h5>Looking For</h5>
            <Button type="button" onClick={()=> openModal("looking-for")}>Edit</Button>
          </Card.Title>
          <p className="fw-bold">Role</p> <p>{currentUser?.desiredJobTitle}</p>
          <p className="fw-bold">Salary</p> <p>£{currentUser?.desiredSalary}</p>
          <p className="fw-bold">Location</p> <p>{currentUser?.desiredLocation}</p>
          <p className="fw-bold">Contract Type</p> <p>{currentUser?.contractTypes?.includes("permanent") ? "Permanent" : null}</p> <p>{currentUser?.contractTypes?.includes("contract") ? "Contract" : null}</p>
          <p className="fw-bold">Hours</p> <p>{currentUser?.hours?.includes("full-time") ? "Full-timw" : null} </p> <p>{currentUser?.hours?.includes("part-time") ? "Part-time" : null} </p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default UpdateProfile