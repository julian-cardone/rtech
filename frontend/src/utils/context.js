import { createContext } from "react"

// incase higher-up components needs to access the setError
export const AppContext = createContext({ setError: () => {} })