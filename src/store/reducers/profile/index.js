import { FETCHING_ERROR_PROFILE, FETCHING_PROFILE, FETCHING_SUCCESS_PROFILE, IS_SUCCESS_SUBMITTING } from "./types"

const initialState = {
  card: null,
  isLoading: false,
  error: null,
  isSuccessSubmitting: false
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PROFILE:
      return {...state, isLoading: true, error: null}
    case FETCHING_SUCCESS_PROFILE:
      return {...state, isLoading: false, error: null, card: action.payload}
    case FETCHING_ERROR_PROFILE:
      return {...state, isLoading: false, error: action.payload}
    case IS_SUCCESS_SUBMITTING:
      return {...state, isSuccessSubmitting: action.payload}
    default:
      return state
  }
}