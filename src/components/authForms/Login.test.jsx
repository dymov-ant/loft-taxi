import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory } from "history"
import React from "react"
import ReactDOM from "react-dom"
import * as redux from "react-redux"
import { Router } from "react-router-dom"
import { logIn } from "../../store/auth"
import LoginForm from "./Login"

const history = createMemoryHistory()

describe("LoginForm component", () => {
  it("LoginForm renders", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch")
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)
    const div = document.createElement("div")
    ReactDOM.render(
      <Router history={history}>
        <LoginForm/>
      </Router>,
      div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("submit login form worked", function () {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch")
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)
    render(
      <Router history={history}>
        <LoginForm/>
      </Router>
    )

    userEvent.click(screen.getByRole("button"))
    expect(mockDispatchFn).toHaveBeenCalledWith(logIn())
    useDispatchSpy.mockClear()
  })

  it("LoginForm snapshot", () => {
    const loginForm = render(
      <Router history={history}>
        <LoginForm/>
      </Router>
    )

    expect(loginForm).toMatchSnapshot()
  })
})