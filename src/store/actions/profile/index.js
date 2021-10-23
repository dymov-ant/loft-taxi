import {
  FETCHING_ERROR_PROFILE,
  FETCHING_PROFILE,
  FETCHING_SUCCESS_PROFILE,
  GET_PROFILE,
  IS_SUCCESS_SUBMITTING,
  SET_PROFILE
} from "../../reducers/profile/types"

export const profileActions = {
  fetchingProfile: () => ({type: FETCHING_PROFILE}),
  fetchingSuccess: (card) => ({type: FETCHING_SUCCESS_PROFILE, payload: card}),
  fetchingError: (error) => ({type: FETCHING_ERROR_PROFILE, payload: error}),
  successSubmitting: (isSubmitting) => ({type: IS_SUCCESS_SUBMITTING, payload: isSubmitting}),
  getProfile: () => ({type: GET_PROFILE}),
  setProfile: (cardData) => ({type: SET_PROFILE, payload: cardData})
}