import { call, put, takeEvery } from "redux-saga/effects"
import { login, registration } from "../../../api/auth"
import { FETCH_LOGIN, FETCH_REGISTRATION } from "../../reducers/auth/types"
import { authActions } from "./index"

function* loginWorker(action) {
  try {
    const {payload} = action
    yield put(authActions.setIsLoading(true))
    const response = yield call(login, payload)
    if (response.data.success) {
      yield put(authActions.setIsAuth(true))
    } else {
      console.log("Ошибка при логине")
    }
  } catch (e) {
    console.log("Ошибка при запросе:", e)
  } finally {
    yield put(authActions.setIsLoading(false))
  }
}

function* registrationWorker(action) {
  console.log("reg")
  try {
    const {payload} = action
    yield put(authActions.setIsLoading(true))
    const response = yield call(registration, payload)
    if (response.data.success) {
      yield put(authActions.setIsAuth(true))
    } else {
      console.log("Ошибка при регистрации")
    }
  } catch (e) {
    console.log("Ошибка при запросе:", e)
  } finally {
    yield put(authActions.setIsLoading(false))
  }
}

export function* authWatcher() {
  yield takeEvery(FETCH_LOGIN, loginWorker)
  yield takeEvery(FETCH_REGISTRATION, registrationWorker)
}