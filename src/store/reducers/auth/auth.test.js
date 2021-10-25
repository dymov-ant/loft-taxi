// import { authActions } from "../../actions/auth"
// import authReducer from "./index"

// describe("authReducer", () => {
//   it("incorrect action", () => {
//     const action = {}
//     const initialState = {
//       isLoggedIn: false
//     }
//
//     const newState = authReducer(initialState, action)
//     expect(newState.isLoggedIn).toBe(false)
//   })
//
//   it("logIn for unauthorized", () => {
//     const action = authActions. logIn()
//     const initialState = {
//       isLoggedIn: false
//     }
//
//     const newState = authReducer(initialState, action)
//
//     expect(newState.isLoggedIn).toBe(true)
//   })
//
//   it("logIn for authorized", () => {
//     const action = logIn()
//     const initialState = {
//       isLoggedIn: true
//     }
//
//     const newState = authReducer(initialState, action)
//
//     expect(newState.isLoggedIn).toBe(true)
//   })
//
//   it("logIn for unauthorized", () => {
//     const action = logIn()
//     const initialState = {
//       isLoggedIn: false
//     }
//
//     const newState = authReducer(initialState, action)
//
//     expect(newState.isLoggedIn).toBe(true)
//   })
//
//   it("logOut for authorized", () => {
//     const action = logOut()
//     const initialState = {
//       isLoggedIn: true
//     }
//
//     const newState = authReducer(initialState, action)
//
//     expect(newState.isLoggedIn).toBe(false)
//   })
//
//   it("logOut for unauthorized", () => {
//     const action = logOut()
//     const initialState = {
//       isLoggedIn: false
//     }
//
//     const newState = authReducer(initialState, action)
//
//     expect(newState.isLoggedIn).toBe(false)
//   })
// })
