import { render } from "@testing-library/react"
import { createMemoryHistory } from "history"
import React from "react"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import AuthPage from "./index"

const history = createMemoryHistory()
const mockStore = {
  getState: () => ({ auth: { isLoggedIn: true } }),
  subscribe: () => {
  },
  dispatch: () => {
  }
}

describe("Auth page", () => {
  it("AuthPage renders", () => {
    history.push("/login")

    const authPage = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <AuthPage location={history.location}/>
        </Router>
      </Provider>
    )
    expect(authPage.getByRole("form")).toBeInTheDocument()
  })

  it("AuthPage render register form", () => {
    history.push("/register")

    const authPage = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <AuthPage location={history.location}/>
        </Router>
      </Provider>
    )
    expect(authPage.getByRole("form")).toBeInTheDocument()
  })

  it("AuthPage snapshot", () => {
    const authPage = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <AuthPage location={history.location}/>
        </Router>
      </Provider>
    )

    expect(authPage).toMatchSnapshot()
  })
})