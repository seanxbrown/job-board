import Container from "react-bootstrap/Container"
import SalaryRange from "./SalaryRange"
import JobType from "./JobType"
import EmployerType from "./EmployerType"
import DatePosted from "./DatePosted"
const Filters = () => {
  return (
    <Container className="flex-column" id="filter-section">
        <h4>Filter your search</h4>
        <SalaryRange />
        <JobType />
        <EmployerType />
        <DatePosted />
    </Container>
  )
}

export default Filters