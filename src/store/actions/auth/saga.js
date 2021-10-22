import { call, put, takeEvery } from "redux-saga/effects"
import { login, registration } from "../../../api/auth"
import { FETCH_LOGIN, FETCH_REGISTRATION, LOGOUT } from "../../reducers/auth/types"
import { authActions } from "./index"
import { AUTH_TOKEN } from "../../../constants"

function* loginWorker(action) {
  try {
    const {payload} = action
    yield put(authActions.setIsLoading(true))
    const response = yield call(login, payload)
    if (response.data.success) {
      localStorage.setItem(AUTH_TOKEN, response.data.token)
      yield put(authActions.setIsAuth(true))
      yield put(authActions.setError(null))
    } else {
      yield put(authActions.setError(response.data.error))
      console.log("Ошибка при логине")
    }
  } catch (e) {
    console.log("Ошибка при запросе:", e)
  } finally {
    yield put(authActions.setIsLoading(false))
  }
}

function* registrationWorker(action) {
  try {
    const {payload} = action
    yield put(authActions.setIsLoading(true))
    const response = yield call(registration, payload)
    if (response.data.success) {
      localStorage.setItem(AUTH_TOKEN, response.data.token)
      yield put(authActions.setIsAuth(true))
      yield put(authActions.setError(null))
    } else {
      yield put(authActions.setError(response.data.error))
      console.log("Ошибка при регистрации")
    }
  } catch (e) {
    console.log("Ошибка при запросе:", e)
  } finally {
    yield put(authActions.setIsLoading(false))
  }
}

function* logoutWorker() {
  localStorage.removeItem(AUTH_TOKEN)
  yield put(authActions.setIsAuth(false))
}

export function* authWatcher() {
  yield takeEvery(FETCH_LOGIN, loginWorker)
  yield takeEvery(FETCH_REGISTRATION, registrationWorker)
  yield takeEvery(LOGOUT, logoutWorker)
}