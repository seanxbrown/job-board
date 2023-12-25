import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import JobSearch from "./JobSearch"
import Filters from "./Filters"
import JobList from "./JobList"
import Button from "react-bootstrap/Button"
import FilterModal from "./FilterModal"
import { useState } from "react"

const Jobs = () => {
    const jobs = [
        { 
            title: "Job Title",
            date: "2023-12-01",
            postedBy: "Company A", 
            employerType: "Employer",
            employmentType: "permanent", 
            hours: "full-time",
            salaryFrom: 30000, 
            salaryTo: 50000,
            salaryHidden: false,
            location: "Manchester",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem ipsam, ducimus incidunt aspernatur magnam facere consequuntur inventore maxime, commodi eum enim fugiat officia, tenetur omnis voluptatem cum vero suscipit deserunt itaque sunt. Nobis quidem aliquam ullam provident soluta, commodi a voluptatem amet temporibus error nesciunt id ex rerum dolorem?"
        },
        { 
            title: "Job Title",
            date: "2023-12-22",
            postedBy: "Company B", 
            employerType: "Employer",
            employmentType: "permanent", 
            hours: "full-time",
            salaryFrom: 55000, 
            salaryTo: 70000,
            salaryHidden: false,
            location: "London",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem ipsam, ducimus incidunt aspernatur magnam facere consequuntur inventore maxime, commodi eum enim fugiat officia, tenetur omnis voluptatem cum vero suscipit deserunt itaque sunt. Nobis quidem aliquam ullam provident soluta, commodi a voluptatem amet temporibus error nesciunt id ex rerum dolorem?"
        },
        { 
            title: "Job Title",
            date: "2023-12-15",
            postedBy: "Company C", 
            employerType: "Employer",
            employmentType: "Contract", 
            hours: "full-time",
            salaryFrom: 70000, 
            salaryTo: 80000,
            salaryHidden: false,
            location: "Manchester",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem ipsam, ducimus incidunt aspernatur magnam facere consequuntur inventore maxime, commodi eum enim fugiat officia, tenetur omnis voluptatem cum vero suscipit deserunt itaque sunt. Nobis quidem aliquam ullam provident soluta, commodi a voluptatem amet temporibus error nesciunt id ex rerum dolorem?"
        }
    ]

    const [displayFilterModal, setDisplayFilterModal]  = useState<boolean>(false)
    const openFilterModal = () => setDisplayFilterModal(true)
    const closeFilterModal = () => setDisplayFilterModal(false)


  return (
    <Container fluid>
        <Row xs={12} className="bg-info">
            <JobSearch />
        </Row>
        <Row>
            <Col sm={3} className="bg-warning d-none d-sm-block"> 
                <Filters />
            </Col>
            <Col xs={12} className="bg-success d-md-none">
                <Button type="button" onClick={openFilterModal}>Filter</Button>
            </Col>
            <Col xs={12} sm={9} className="bg-danger">
                <JobList jobs={jobs}/>
            </Col>
        </Row>
        <FilterModal show={displayFilterModal} closeFilterModal={closeFilterModal}/>
    </Container>
  )
}

export default Jobs