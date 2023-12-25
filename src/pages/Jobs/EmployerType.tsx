import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"

const EmployerType = () => {
  return (
    <Container>
        <h5>Employer Type</h5>
        <Form>
            <Form.Check type="checkbox" id="job-employer" label="Direct Employer" />
            <Form.Check type="checkbox" id="job-agency" label="Agency" />
        </Form>
    </Container>
  )
}

export default EmployerType