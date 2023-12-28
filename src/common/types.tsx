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

export interface UserAccount {
    firstName?: string,
    lastName?: string,
    email: string,
    id: string,
    city?: string,
    country?: string,
    jobTitle?: string,
    role: "candidate" | "recruiter",
    currentSalary?: number,
    desiredSalary?: number,
}
