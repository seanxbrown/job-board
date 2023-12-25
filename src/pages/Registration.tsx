import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Registration = () => {
  return (
    <Container className="my-5 p-5">
        <Container id="form-container-reg">
            <h2 className="text-center">Register</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="example@domain.co.uk" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Check
                    inline
                    type="radio"
                    label="Candidate"
                    name="account-type"
                    id="account-candidate-radio"
                />
                <Form.Check
                    inline
                    type="radio"
                    label="Recruiter"
                    name="account-type"
                    id="account-recruiter-radio"
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