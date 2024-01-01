import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signInWithEmailAndPassword, auth, collection, query, where, getDocs, db, signOut } from "../common/firebaseConfig"
import { useRef, FormEvent, Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom";


const LogIn = ({ setRole }: { setRole: Dispatch<SetStateAction<"candidate" | "recruiter" | null>> }) => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        logUserIn()
    }

    async function logUserIn() {
        try {
            const { user: loggedInUser} = await signInWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
            const role: string | undefined = await getUserRole(loggedInUser.uid)
            verifyRole(role, "candidate")
            setRole("candidate")

        }catch(e) {
            alert(e)
        }
    }

    async function getUserRole(id: string) {
        if (!id) {
            throw new Error("Authenticated user has no ID")
        }

        try {
            const usersRef = collection(db, "users")
            const q = query(usersRef, where("id", "==", id))
            const querySnapshot = await getDocs(q)
            let roleData:string | undefined = undefined
            querySnapshot.forEach(doc => roleData = doc.data().role)
            return roleData
        } catch(e) {
            alert(e)
        }
    }

    async function verifyRole(userRole: string | undefined, partition: string) {
        if (userRole !== partition) {
            alert("No candidate account found for this email address")
            signUserOut()
        } else {
            navigate("/job-board")
        }
    }

    async function signUserOut() {
        try {
            await signOut(auth)
            setRole(null)
        } catch(e) {
            alert(e)
        }
    }
    
  return (
    <Container className="my-5 p-5">
        <Container id="form-container">
            <h2 className="text-center">Log in to Job Board Account</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required type="email" placeholder="example@domain.co.uk" ref={emailRef}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control required ref={passwordRef} type="password" />
                    <Form.Text>Forgot Password?</Form.Text>
                </Form.Group>
                <div className="d-grid mt-2">
                    <Button type="submit" size="lg">Log In</Button>
                </div>
            </Form>
            <p>Don't have an account? Sign up</p>
        </Container>
    </Container>
  )
}

export default LogIn