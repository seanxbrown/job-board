import { createContext } from "react"
import { User } from "../common/firebaseConfig"

export const AuthContext = createContext<User | null>(null)