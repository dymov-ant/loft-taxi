import { render } from "@testing-library/react"
import { createMemoryHistory } from "history"
import React from "react"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import App from "./App"

jest.mock("./layout", () => () => <div>MainLayout</div>)
const history = createMemoryHistory()
const mockStore = {
  getState: () => ({ auth: { isLoggedIn: true } }),
  subscribe: () => {
  },
  dispatch: () => {
  }
}

describe("App component", () => {
  it("App renders", () => {
    const app = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    )

    console.log(app.container.innerHTML)
    expect(app.container.innerHTML).toMatch("MainLayout")
    // expect(app.getByText(/authPage/)).toBeInTheDocument()
  })

  it("App snapshot", () => {
    const app = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    )

    expect(app).toMatchSnapshot()
  })
})
