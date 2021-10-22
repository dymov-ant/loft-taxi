import { api } from "./index"
import { AUTH_TOKEN } from "../constants"

const token = localStorage.getItem(AUTH_TOKEN)

export const getProfile = () => {
  return api.get("/card", {
    params: {token}
  })
}

export const setProfile = (cardData) => {
  return api.post("/card", {...cardData, token})
}