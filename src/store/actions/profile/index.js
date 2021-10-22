import {
  FETCHING_ERROR_PROFILE,
  FETCHING_PROFILE,
  FETCHING_SUCCESS_PROFILE,
  GET_PROFILE,
  SET_PROFILE
} from "../../reducers/profile/types"

export const profileActions = {
  fetchingProfile: () => ({type: FETCHING_PROFILE}),
  fetchingSuccess: (card) => ({type: FETCHING_SUCCESS_PROFILE, payload: card}),
  fetchingError: (error) => ({type: FETCHING_ERROR_PROFILE, payload: error}),
  getProfile: () => ({type: GET_PROFILE}),
  setProfile: (cardData) => ({SET_PROFILE, payload: cardData})
}