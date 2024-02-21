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
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    contactNumber?: number | null,
    id: string,
    city?: string | null,
    country?: string | null,
    jobTitle?: string | null,
    desiredJobTitle?: string | null,
    desiredLocation?: string | null,
    role: "candidate" | "recruiter",
    currentSalary?: number | null,
    desiredSalary?: number | null,
    contractTypes?: String[],
    hours?: String[],
    skills?: String[],
    qualifications?: String[]
}
