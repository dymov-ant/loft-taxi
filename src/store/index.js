import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects"
import { rootReducer } from "./reducers"
import { authWatcher } from "./actions/auth/saga"
import { profileWatcher } from "./actions/profile/saga"
import { orderWatcher } from "./actions/order/saga"


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

function* rootWatcher() {
  yield all([
    authWatcher(),
    profileWatcher(),
    orderWatcher()
  ])
}

sagaMiddleware.run(rootWatcher)