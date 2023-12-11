import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LogIn = () => {
  return (
    <Container className="my-5 p-5">
        <Container id="form-container">
            <h2 className="text-center">Log in to Job Board Account</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="example@domain.co.uk" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                    <Form.Text>Forgot Password?</Form.Text>
                </Form.Group>
                <div className="d-grid mt-2">
                    <Button type="submit" size="lg">Log In</Button>
                </div>
            </Form>
            <p>Don't have an account? Sign up</p>
        </Container>
    </Container>
  )
}

export default LogIn