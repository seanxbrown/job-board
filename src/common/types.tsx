export interface Job {
    title: string,
    date: string,
    postedBy: string, 
    employerType: string,
    employmentType: string, 
    hours: string,
    salaryFrom: number, 
    salaryTo: number,
    salaryHidden: boolean,
    location: string,
    description: string
}