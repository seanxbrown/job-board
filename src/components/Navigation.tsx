import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

const Navigation = () => {
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
                <Nav>
                    <Nav.Link>Register</Nav.Link>
                    <Nav.Link>Candidate Login</Nav.Link>
                    <Link to="/job-board/recruiter-login" className="nav-link">Recruiter Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation