import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Accordion from "react-bootstrap/Accordion"

const Footer = () => {
  return (
    <footer>
        <Accordion className="d-sm-block d-md-none">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Job Seekers</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Recruiters</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Guides</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                        <li>
                            <a href="#">Lorem Ipsum</a>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Row className="d-md-flex d-none" >
            <Col md={4}>
                <Nav className="flex-column" justify={true}>
                    <Nav.Item>Job Seekers</Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col md={4}>
                <Nav className="flex-column" justify={true}>
                    <Nav.Item>Recruiters</Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col md={4}>
                <Nav className="flex-column" justify={true}>
                    <Nav.Item>Guides</Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Lorem Ipsum</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>
        <p className="p-5">&copy; 2024 Job Board</p>
    </footer>
  )
}

export default Footer