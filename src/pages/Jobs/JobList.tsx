import Stack from "react-bootstrap/Stack"
import JobComponent from "./JobComponent"
import { Job } from "../../common/types"

const JobList = ( { jobs } : { jobs: Job[] }) => {
  return (
    <Stack gap={3} className="p-2">
    {jobs.map((job:any) => <JobComponent job={job} />)}
    </Stack>
    
  )
}

export default JobList