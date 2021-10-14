import { api } from "./index"

export const registration = (email, password, name, surname) => {
  return api.post("/register", {
    email,
    password,
    name,
    surname
  })
}

export const login = (email, password) => {
  return api.post("/auth", {
    email,
    password
  })
}