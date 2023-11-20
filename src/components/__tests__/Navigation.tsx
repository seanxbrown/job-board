import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
                    <Nav.Link>Recruiter Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation