import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import { FormEvent, useRef, useContext } from "react"
import { doc, updateDoc, db } from "../../common/firebaseConfig"
import { AuthContext } from "../../contexts/AuthContext";
import { UserAccount } from "../../common/types"

const UpdateProfileModal = ({userInfo, statusObject, handleClose, getProfileDetails} : {userInfo: UserAccount | null, statusObject: {display: boolean, section: null | string}, handleClose: any, getProfileDetails: any}) => {
    const user = useContext(AuthContext);
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const titleRef = useRef<HTMLInputElement>(null)
    const cityRef = useRef<HTMLInputElement>(null)
    const numberRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const desiredRoleRef = useRef<HTMLInputElement>(null)
    const desiredSalaryRef = useRef<HTMLInputElement>(null)
    const desiredLocationRef = useRef<HTMLInputElement>(null)
    const permRoleRef = useRef<HTMLInputElement>(null)
    const contractRoleRef = useRef<HTMLInputElement>(null)
    const fullTimeRef = useRef<HTMLInputElement>(null)
    const partTimeRef = useRef<HTMLInputElement>(null)


    function calculateTitle() {
        if (!statusObject.section) {
            return
        } else if (statusObject.section === "contact") {
            return "Contact Details"
        } else if (statusObject.section === "looking-for") {
            return "Looking For"
        }
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        statusObject.section === "contact" ?
        updateContactInfo()
        : updateLookingFor()
    }

    async function updateContactInfo() {
        if (!userInfo) {
            return;
        }

        const firstName = firstNameRef.current?.value
        const lastName = lastNameRef.current?.value
        const contactNumber = numberRef.current?.value
        const city = cityRef.current?.value
        const jobTitle = titleRef.current?.value

        const updatedInfo = {
            firstName: firstName ?? null,
            lastName: lastName ?? null,
            email: userInfo.email,
            contactNumber: contactNumber ? +contactNumber : null,
            id: userInfo.id,
            city: city ?? null,
            jobTitle: jobTitle ?? null,
            role: "candidate",
        }

        const userRef = doc(db, `users/${userInfo.id}`)

        try {
            await updateDoc(userRef, updatedInfo)
            alert("Updated successfully")
            handleClose()
            getProfileDetails()
        } catch(e) {
            alert(e)
        }
    }

    async function updateLookingFor() {
        if (!userInfo) {
            return
        }
        const desiredJobTitle =desiredRoleRef.current?.value
        const desiredLocation = desiredLocationRef.current?.value
        const desiredSalary = desiredSalaryRef.current?.value
        const permRole = permRoleRef.current?.checked
        const contractRole = contractRoleRef.current?.checked;
        const fullTime = fullTimeRef.current?.checked;
        const partTime = partTimeRef.current?.checked;
        const contractTypes: String[] = []
        const hours: String[] = []
        
        if (permRole) {
            contractTypes.push("permanent")
        }

        if (contractRole) {
            contractTypes.push("contract")
        }

        if (fullTime) {
            hours.push("full-time")
        }

        if (partTime) {
            hours.push("part-time")
        }
       

        const updatedInfo = {
            email: userInfo.email,
            id: userInfo.id,
            desiredJobTitle: desiredJobTitle ?? null,
            desiredLocation: desiredLocation ?? null,
            role: "candidate",
            desiredSalary: desiredSalary ? +desiredSalary : null,
            contractTypes: contractTypes,
            hours: hours

        }

        const userRef = doc(db, `users/${userInfo.id}`)

       try {
            await updateDoc(userRef, updatedInfo)
            alert("Updated successfully")
            handleClose()
            getProfileDetails()
        } catch(e) {
            alert(e)
        }
        
    }


  return (
    <Modal
        show={statusObject.display}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            {statusObject.section !== null && <Modal.Title>{calculateTitle()}</Modal.Title> }
        </Modal.Header>
        <Modal.Body>
            {(statusObject.section && statusObject.section ==="contact") && 
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" ref={firstNameRef} defaultValue={userInfo && userInfo.firstName || " "}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" ref={lastNameRef} defaultValue={userInfo && userInfo.lastName || " "}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" ref={titleRef} defaultValue={userInfo && userInfo.jobTitle || " "}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" ref={cityRef} defaultValue={userInfo && userInfo.city || " "}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" ref={numberRef} defaultValue={userInfo && userInfo.contactNumber || " "}/>
                    </Form.Group>
                    <Button type="submit">Update</Button>
            </Form>
            }
            {(statusObject.section && statusObject.section ==="looking-for") && 
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" ref={desiredRoleRef} defaultValue={userInfo && userInfo.desiredJobTitle || " "}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" ref={desiredSalaryRef} defaultValue={userInfo && userInfo.desiredSalary || " "}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" ref={desiredLocationRef} defaultValue={userInfo && userInfo.desiredLocation || " "}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contract Type</Form.Label>
                        <div id="contract-type-container">
                            <Form.Check inline type="checkbox" label="Permanent" id="perm-check"  ref={permRoleRef} />
                            <Form.Check inline type="checkbox" label="Contract" id="contract-check" ref={contractRoleRef} />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Hours</Form.Label>
                        <div id="hours-type-container">
                            <Form.Check inline type="checkbox" label="Full-Time" id="full-time-check"  ref={fullTimeRef} />
                            <Form.Check inline type="checkbox" label="Part-Time" id="part-time-check" ref={partTimeRef} />
                        </div>
                    </Form.Group>
                    <Button type="submit">Update</Button>

                </Form>
            }
            
        </Modal.Body>
        <Modal.Footer>
            <Button type="button" onClick={handleClose}>Close</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default UpdateProfileModal