import { api } from "./index"
import { AUTH_TOKEN } from "../constants"

export const getProfile = () => {
  return api.get("/card", {
    params: {token: localStorage.getItem(AUTH_TOKEN)}
  })
}

export const setProfile = (cardData) => {
  return api.post("/card", {...cardData, token: localStorage.getItem(AUTH_TOKEN)})
}