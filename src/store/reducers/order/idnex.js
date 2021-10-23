import {
  CLEAR_ROUTE,
  FETCHING_ADDRESS_LIST,
  FETCHING_ERROR_ADDRESS_LIST,
  FETCHING_ERROR_ROUTE,
  FETCHING_ROUTE,
  FETCHING_SUCCESS_ADDRESS_LIST,
  FETCHING_SUCCESS_ROUTE
} from "./types"

const initialState = {
  addressList: [],
  route: [],
  isLoading: false,
  error: null
}

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ADDRESS_LIST:
      return {...state, isLoading: true, error: null}
    case FETCHING_SUCCESS_ADDRESS_LIST:
      return {...state, isLoading: false, error: null, addressList: action.payload}
    case FETCHING_ERROR_ADDRESS_LIST:
      return {...state, isLoading: false, error: action.payload}
    case FETCHING_ROUTE:
      return {...state, isLoading: true, error: null}
    case FETCHING_SUCCESS_ROUTE:
      return {...state, isLoading: false, error: null, route: action.payload}
    case FETCHING_ERROR_ROUTE:
      return {...state, isLoading: false, error: action.payload}
    case CLEAR_ROUTE:
      return {...state, isLoading: false, error: null, route: []}
    default:
      return state
  }
}