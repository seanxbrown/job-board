import { createContext } from "react";

export const RoleContext = createContext<"candidate" | "recruiter" | null>(null)