import { Job } from "../../common/types"

const JobComponent = ({ job } : { job: Job }) => {
  return (
    <div className="border border-solid border-5">
        <p>{job.title}</p>
        <p>{job.date}</p>
        <p>{job.postedBy}</p>
        <p>{job.employmentType}</p>
        <p>{job.hours}</p>
        <p>{job.salaryFrom} - {job.salaryTo}</p>
        <p>{job.location}</p>
    </div>
  )
}

export default JobComponent