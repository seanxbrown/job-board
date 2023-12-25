import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const JobSearch = () => {
  return (
    <Container id="non-mobile-search-container">
        <Form className="py-5">
            <Row className="justify-content-center">
                <Col md={4}>
                    <Form.Control type="text" placeholder="Enter a job, skill or company" />
                </Col>
                <Col md={4}>
                    <Form.Control type="text" placeholder="Enter a job, skill or company" />
                </Col>
                <Col xs="auto">
                    <Button type="submit">Search</Button>
                </Col>
            </Row>
        </Form>        
    </Container>
  )
}

export default JobSearch