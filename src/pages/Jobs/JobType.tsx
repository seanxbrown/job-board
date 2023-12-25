import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"

const JobType = () => {
  return (
    <Container>
        <Form>
            <Form.Check type="checkbox" id="job-perm" label="Permanent" />
            <Form.Check type="checkbox" id="job-contract" label="Fixed-Term Contract" />
            <Form.Check type="checkbox" id="job-temp" label="Temp" />
            <Form.Check type="checkbox" id="job-full" label="Full-Time" />
            <Form.Check type="checkbox" id="job-part" label="Part-Time" />
        </Form>
    </Container>
  )
}

export default JobType