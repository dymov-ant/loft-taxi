import { api } from "./index"

export const getAddressList = () => {
  return api.get("/addressList")
}

export const getRoute = (payload) => {
  return api.get("/route", {
    params: {
      address1: payload.addressFrom,
      address2: payload.addressTo
    }
  })
}