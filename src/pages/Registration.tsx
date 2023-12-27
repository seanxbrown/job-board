import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUserWithEmailAndPassword, auth } from "../common/firebaseConfig"
import { FormEvent, useContext, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom"

const Registration = () => {
    const user = useContext(AuthContext)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const passwordConfRef = useRef<HTMLInputElement | null>(null)
    const recruiterAccountRef = useRef<HTMLInputElement | null>(null)
    const candidateAccountRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        registerUser()
    }

    async function registerUser() {
        if (user) {
            alert("Already logged in")
            return
        }
        if (passwordRef.current!.value !== passwordConfRef.current!.value) {
            alert("Passwords do not match")
            return
        };
        if (recruiterAccountRef.current!.checked === false && candidateAccountRef.current!.checked === false) {
            alert("Must select a role")
            return
        }
        try {
            const newUserAccount = await createUserWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
            navigate("/job-board")
        } catch(e) {
            alert(e)
        }
    }
  return (
    <Container className="my-5 p-5">
        <Container id="form-container-reg">
            <h2 className="text-center">Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="example@domain.co.uk" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control ref={passwordConfRef} type="password" />
                </Form.Group>
                <Form.Check
                    inline
                    type="radio"
                    label="Candidate"
                    name="account-type"
                    id="account-candidate-radio"
                    ref={candidateAccountRef}
                    value="candidate"
                />
                <Form.Check
                    inline
                    type="radio"
                    label="Recruiter"
                    name="account-type"
                    id="account-recruiter-radio"
                    ref={recruiterAccountRef}
                    value="recruiter"
                />
                <div className="d-grid mt-2">
                    <Button type="submit" size="lg">Register</Button>
                </div>
            </Form>
        </Container>
    </Container>
  )
}

export default Registration