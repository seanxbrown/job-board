import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"

const DatePosted = () => {
  return (
    <Container>
        <h5>Date Posted</h5>
        <Form>
            <Form.Check type="checkbox" id="job-today" label="Today" />
            <Form.Check type="checkbox" id="job-week" label="This Week" />
            <Form.Check type="checkbox" id="job-week-2" label="Last Two Weeks" />
            <Form.Check type="checkbox" id="job-month" label="Last Month" />
        </Form>
    </Container>
  )
}

export default DatePosted