import { call, put, takeEvery } from "redux-saga/effects"
import { orderActions } from "./index"
import { getAddressList, getRoute } from "../../../api/order"
import { GET_ADDRESS_LIST, GET_ROUTE } from "../../reducers/order/types"

function* getAddressListWorker() {
  try {
    yield put(orderActions.fetchingAddressList())
    const response = yield call(getAddressList)
    if (response.data.addresses.length) {
      yield put(orderActions.fetchingSuccessAddressList(response.data.addresses))
    } else {
      yield put(orderActions.fetchingErrorAddressList("Ошибка при получении списка адресов"))
      console.log("Ошибка при получении списка адресов")
    }
  } catch (e) {
    console.log("Ошибка при запросе:", e)
    yield put(orderActions.fetchingErrorAddressList("Что-то пошло не так"))
  }
}

function* getRouteWorker(action) {
  try {
    yield put(orderActions.fetchingRoute())
    const {payload} = action
    const response = yield call(getRoute, payload)
    console.log(response)
    if (response.data.length) {
      yield put(orderActions.fetchingSuccessRoute(response.data))
    } else {
      yield put(orderActions.fetchingErrorRoute("Ошибка при получении маршрута"))
      console.log("Ошибка при получении маршрута")
    }
  } catch (e) {
    console.log("Ошибка при запросе:", e)
    yield put(orderActions.fetchingErrorRoute("Что-то пошло не так"))
  }
}

export function* orderWatcher() {
  yield takeEvery(GET_ADDRESS_LIST, getAddressListWorker)
  yield takeEvery(GET_ROUTE, getRouteWorker)
}