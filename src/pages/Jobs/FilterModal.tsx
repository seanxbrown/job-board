import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import SalaryRange from "./SalaryRange"
import JobType from "./JobType"
import EmployerType from "./EmployerType"
import DatePosted from "./DatePosted"

const FilterModal = ({ show, closeFilterModal } : { show: boolean, closeFilterModal:VoidFunction }) => {
  return (
    <Modal show={show}
        onHide={closeFilterModal}
        fullscreen
    > 
        <Modal.Header closeButton>
            <Modal.Title>Filter your search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SalaryRange />
            <JobType />
            <EmployerType />
            <DatePosted />
        </Modal.Body>
        <Modal.Footer>
            <Button type="button" onClick={closeFilterModal}>Apply filter</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default FilterModal