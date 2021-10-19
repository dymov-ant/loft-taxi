import { FETCH_LOGIN, FETCH_REGISTRATION, SET_IS_LOADING, SET_IS_LOGGED_IN } from "../../reducers/auth/types"


export const authActions = {
  setIsAuth: (payload) => ({type: SET_IS_LOGGED_IN, payload}),
  setIsLoading: (payload) => ({type: SET_IS_LOADING, payload}),
  fetchLogin: (payload) => ({type: FETCH_LOGIN, payload}),
  fetchRegistration: (payload) => ({type: FETCH_REGISTRATION, payload})
}