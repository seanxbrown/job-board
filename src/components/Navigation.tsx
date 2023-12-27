import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext";

const Navigation = () => {
    const user = useContext(AuthContext)
  return (
    <Navbar expand="lg" collapseOnSelect bg="primary">
        <Container fluid className="bg-">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand>
                Job Board
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                <Nav>
                    <Nav.Link>Jobs</Nav.Link>
                    <Nav.Link>Career Guidance</Nav.Link>
                </Nav>
                { !user && <Nav>
                    <Link to="/job-board/register" className="nav-link">Register</Link>
                    <Link to="/job-board/login" className="nav-link">Candidate Login</Link>
                    <Link to="/job-board/recruiter-login" className="nav-link">Recruiter Login</Link>
                </Nav>
                }
                { user && <Navbar.Text>{user.email}</Navbar.Text>}
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation