import { combineReducers } from "redux"
import authReducer from "./auth"
import profileReducer from "./profile"
import orderReducer from "./order/idnex"


export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  order: orderReducer
})