import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory } from "history"
import React from "react"
import * as redux from "react-redux"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import { ROUTE_NAMES } from "../../router"
import { logOut } from "../../store/auth"
import Header from "./index"

const history = createMemoryHistory()
const mockStore = {
  getState: () => ({ auth: { isLoggedIn: true } }),
  subscribe: () => {
  },
  dispatch: () => {
  }
}

describe("Header component", () => {
  it("Header renders", () => {
    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>
    )

    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })

  it("openMenu works", () => {
    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>
    )
    const burger = document.querySelector(".burgerBtn")
    const nav = screen.getByRole("navigation")
    userEvent.click(burger)

    expect(nav).toHaveClass("navbar_open")
  })

  it("closeMenu works", () => {
    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>
    )
    const burger = document.querySelector(".burgerBtn")
    userEvent.click(burger)
    const closeBtn = document.querySelector(".closeBtn")
    const nav = screen.getByRole("navigation")
    userEvent.click(closeBtn)

    expect(nav).not.toHaveClass("navbar_open")
  })

  it("navigation works", () => {
    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>
    )

    userEvent.click(screen.getByText(/карта/i))
    expect(history.location.pathname).toMatch(ROUTE_NAMES.MAP)
    userEvent.click(screen.getByText(/профиль/i))
    expect(history.location.pathname).toMatch(ROUTE_NAMES.PROFILE)
  })

  it("logout works", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch")
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)

    render(
      <Provider store={mockStore}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>
    )

    userEvent.click(screen.getByText(/выйти/i))
    expect(mockDispatchFn).toHaveBeenCalledWith(logOut())
    useDispatchSpy.mockClear()
  })

  it("Header snapshot", () => {
    const header = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>
    )

    expect(header).toMatchSnapshot()
  })
})
