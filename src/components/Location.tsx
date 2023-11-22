import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup"

const Location = () => {
  return (
    <Container fluid id="location-section" className="p-5">
        <h2 className="fw-bold">Trending Locations</h2>
        <CardGroup id="trending-location-row">
            <Card className="trending-location" bg="secondary" text="white">
                <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Text className="fs-4">London</Card.Text>
                </Card.Body>
            </Card>
            <Card className="trending-location" bg="secondary" text="white">
                <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Text className="fs-4">Manchester</Card.Text>
                </Card.Body>
            </Card>
            <Card className="trending-location" bg="secondary" text="white">
                <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Text className="fs-4">Edinburgh</Card.Text>
                </Card.Body>
            </Card>
            <Card className="trending-location" bg="secondary" text="white">
                <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Text className="fs-4">Cardiff</Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </Container>
  )
}

export default Location