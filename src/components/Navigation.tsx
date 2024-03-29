import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useContext, Dispatch, SetStateAction } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { signOut, auth } from "../common/firebaseConfig"
import { RoleContext } from "../contexts/RoleContext";

const Navigation = ({ setRole }: { setRole: Dispatch<SetStateAction<"candidate" | "recruiter" | null>> }) => {
    const user = useContext(AuthContext)
    const role = useContext(RoleContext)
    async function signUserOut() {
        try {
            await signOut(auth)
            alert("Logged out successfully")
            setRole(null)
        } catch(e) {
            alert(e)
        }
    }
  return (
    <Navbar expand="lg" collapseOnSelect bg="primary">
        <Container fluid className="bg-">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Link to="/job-board" className="navbar-brand">
                Job Board
            </Link>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                <Nav>
                    <Link to="/job-board/jobs" className="nav-link">Jobs</Link>
                    <Nav.Link>Career Guidance</Nav.Link>
                </Nav>
                { (!user || !role) && <Nav>
                    <Link to="/job-board/register" className="nav-link">Register</Link>
                    <Link to="/job-board/login" className="nav-link">Candidate Login</Link>
                    <Link to="/job-board/recruiter-login" className="nav-link">Recruiter Login</Link>
                </Nav>
                }
                { (user && role) &&
                    <Nav>
                        <Navbar.Text className="me-4">{user.email}</Navbar.Text>
                        { role === "candidate" && <Link to="/job-board/update-profile" className="nav-link">Update Profile</Link> }
                        <Navbar.Text onClick={signUserOut}>Log out</Navbar.Text>
                    </Nav>
                    }
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation