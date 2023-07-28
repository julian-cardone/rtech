import { useRef, useState } from "react"
import { AppContext } from "../../utils/context"

export const AppContextProvider = ({ children }) => {
  const cache = useRef(new Map())
  const [error, setError] = useState("")

  return (
    <AppContext.Provider value={{ setError, cache }}>
      {error ? (
          <h1 className="applicationError">Oops. Application broken</h1>
      ) : (
        children
      )}
    </AppContext.Provider>
  )
}
