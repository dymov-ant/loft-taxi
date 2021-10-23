import { call, put, takeEvery } from "redux-saga/effects"
import { getProfile, setProfile } from "../../../api/profile"
import { profileActions } from "./index"
import { GET_PROFILE, SET_PROFILE } from "../../reducers/profile/types"

function* getProfileWorker() {
  try {
    yield put(profileActions.fetchingProfile())
    const response = yield call(getProfile)
    if (response.data.id) {
      yield put(profileActions.fetchingSuccess(response.data))
    } else {
      yield put(profileActions.fetchingError(response.data.error))
      console.log("Ошибка при получении данных банковской карты")
    }
  } catch (e) {
    console.log("Ошибка при запросе:", e)
    yield put(profileActions.fetchingError("Что-то пошло не так"))
  }
}

function* setProfileWorker(action) {
  try {
    yield put(profileActions.fetchingProfile())
    const {payload} = action
    const response = yield call(setProfile, payload)
    if (response.data.success) {
      delete payload.token
      yield put(profileActions.fetchingSuccess(payload))
      yield put(profileActions.successSubmitting(true))
    } else {
      yield put(profileActions.fetchingError(response.data.error))
      console.log("Ошибка при сохранении данных банковской карты")
    }
  } catch (e) {
    console.log("Ошибка при запросе:", e)
    yield put(profileActions.fetchingError("Что-то пошло не так"))
  }
}

export function* profileWatcher() {
  yield takeEvery(GET_PROFILE, getProfileWorker)
  yield takeEvery(SET_PROFILE, setProfileWorker)
}