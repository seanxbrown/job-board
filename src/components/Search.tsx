import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";


const Search = () => {
    const navigate = useNavigate()
  return (
    <Container fluid className="bg-secondary p-5 justify-content-center" id="search-container=main">
        <Container id="search-form-container-main">
            <h2 className="fw-bold text-light">Find your dream job, find your freedom.</h2>
            <Form className="py-5" onSubmit={ ()=> navigate("/job-board/jobs") }>
                <Row className="py-4 row-gap-2">
                    <Col xs={12} sm={5}>
                        <Form.Group>
                            <Form.Control
                                type="text" 
                                size="lg" 
                                placeholder="Search job titles" 
                                id="job-search-input-main" 
                                className="py-3"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={5}>
                        <Form.Group>
                            <Form.Control
                                type="text" 
                                size="lg" 
                                placeholder="Enter a location" 
                                id="job-location-input-main" 
                                className="py-3"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Button
                            variant="primary"
                            type="submit"
                            size="lg" 
                            className="w-100 py-3 fw-bold"
                        >
                            Search
                        </Button>
                    </Col>                
                </Row>
            </Form>
        </Container>
        <Container id="popular-searches">
            <p className="text-light">Popular Searches</p>
            <Row className="row-gap-2">
                <Col xs={4} sm={2}>
                    <Button type="button" variant="dark">IT</Button>
                </Col>
                <Col xs={4} sm={2}>
                    <Button type="button" variant="dark">Sales</Button>
                </Col>
                <Col xs={4} sm={2}>
                    <Button type="button" variant="dark">Marketing</Button>
                </Col>
                <Col xs={4} sm={2}>
                    <Button type="button" variant="dark">Logistics</Button>
                </Col>
                <Col xs={4} sm={2}>
                    <Button type="button" variant="dark">Hybrid</Button>
                </Col>
                <Col xs={4} sm={2}>
                    <Button type="button" variant="dark">Engineering</Button>
                </Col>
            </Row>
        </Container>
        
    </Container>
  )
}

export default Search