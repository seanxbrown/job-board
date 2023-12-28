import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUserWithEmailAndPassword, auth, doc, setDoc, User, db } from "../common/firebaseConfig"
import { FormEvent, useContext, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserAccount } from "../common/types";
import { Dispatch, SetStateAction } from "react"

const Registration = ({ setRole }: { setRole: Dispatch<SetStateAction<"candidate" | "recruiter" | null>> }) => {
    const user = useContext(AuthContext)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const passwordConfRef = useRef<HTMLInputElement | null>(null)
    const recruiterAccountRef = useRef<HTMLInputElement | null>(null)
    const candidateAccountRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)

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
            setLoading(true)
            const { user: newUser} = await createUserWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
            addUserToDb(newUser, newUser.email!, newUser.uid)
            alert("Account created successfully")
            setLoading(false)
            setRole(candidateAccountRef.current!.checked ? "candidate" : "recruiter")
            navigate("/job-board")
        } catch(e) {
            alert(e)
            setLoading(false)
        }
    }

    async function addUserToDb(newUser: User, email: string, id: string) {
        if (newUser) {
            const userAccount: UserAccount = {
                email: email,
                id: id,
                role: candidateAccountRef.current!.checked ? "candidate" : "recruiter"
            }
            try {
                await setDoc(doc(db, "users", id), userAccount)
            } catch(e) {
                alert(e)
            }
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
                    disabled={loading}
                />
                <Form.Check
                    inline
                    type="radio"
                    label="Recruiter"
                    name="account-type"
                    id="account-recruiter-radio"
                    ref={recruiterAccountRef}
                    value="recruiter"
                    disabled={loading}
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