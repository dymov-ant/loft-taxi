import { api } from "./index"

export const registration = (payload) => {
  return api.post("/register", payload)
}

export const login = (payload) => {
  return api.post("/auth", payload)
}