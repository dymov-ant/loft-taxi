import { SET_ERROR, SET_IS_LOADING, SET_IS_LOGGED_IN } from "./types"

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return {...state, isLoggedIn: action.payload}
    case SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    case SET_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}