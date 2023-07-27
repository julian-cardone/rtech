//for the sake of this app, fetch statements are here

import {
  getEmployees,
  getTransactionsPaginated,
  getTransactionsByEmployee,
  setTransactionApproval,
} from "./requests"
import { PaginatedRequestParams, RequestByEmployeeParams, SetTransactionApprovalParams } from "./types"

export function rTechFetch(
  endpoint, 
  params
){

    let result

    try {
      switch (endpoint) {
        case "schools":
          result = getSchools()
          break

        case "paginatedBooks":
          result = getBooksPaginated(params)
          break

        case "transactionsByEmployee":
          result = getTransactionsByEmployee(params as RequestByEmployeeParams) as unknown as TData

          setTimeout(() => {
            mockApiLogger({ data: { endpoint, params, result } })
            resolve(result)
          }, mockTimeout * 1.5)
          break

        case "setTransactionApproval":
          result = setTransactionApproval(params as SetTransactionApprovalParams) as unknown as TData

          setTimeout(() => {
            mockApiLogger({ data: { endpoint, params, result } })
            resolve(result)
          }, mockTimeout * 1)
          break

        default:
          throw new Error("Invalid endpoint")
      }
    } catch (error) {
      if (error instanceof Error) {
        mockApiLogger({
          message: error.message,
          data: { endpoint, params },
          type: "error",
        })
        reject(error.message)
      }
    }
  }

function mockApiLogger({
  data,
  message = "Success request",
  type = "success",
}: {
  message?: string
  data: object
  type?: "success" | "error" | "info"
}) {
  if (process.env.REACT_APP_MOCK_REQUEST_LOGS_ENABLED === "false") {
    return
  }

  console.log(`%c--Fake Request Debugger-- %c${message}`, "color: #717171", getTitleColor())
  console.log(data)

  function getTitleColor() {
    if (type === "error") {
      return "color: #d93e3e;"
    }

    if (type === "info") {
      return "color: #1670d2;"
    }

    return "color: #548a54;"
  }
}

function getTimeout() {
  const timeout = parseInt(
    new URL(document.location as unknown as URL).searchParams.get("timeout") ??
      process.env.REACT_APP_TIMEOUT_MULTIPLIER ??
      "1000"
  )

  if (Number.isNaN(timeout)) {
    return 1000
  }

  return timeout
}

export type RegisteredEndpoints =
  | "employees"
  | "paginatedTransactions"
  | "transactionsByEmployee"
  | "setTransactionApproval"
