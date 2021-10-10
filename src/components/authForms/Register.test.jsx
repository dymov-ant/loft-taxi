import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory } from "history"
import React from "react"
import ReactDOM from "react-dom"
import * as redux from "react-redux"
import { Router } from "react-router-dom"
import { logIn } from "../../store/auth"
import RegisterForm from "./Register"

const history = createMemoryHistory()

describe("RegisterForm component", () => {
  it("RegisterForm renders", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch")
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)
    const div = document.createElement("div")
    ReactDOM.render(
      <Router history={history}>
        <RegisterForm/>
      </Router>,
      div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("submit register form worked", function () {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch")
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)
    render(
      <Router history={history}>
        <RegisterForm/>
      </Router>
    )

    userEvent.click(screen.getByRole("button"))
    expect(mockDispatchFn).toHaveBeenCalledWith(logIn())
    useDispatchSpy.mockClear()
  })

  it("RegisterForm snapshot", () => {
    const registerForm = render(
      <Router history={history}>
        <RegisterForm/>
      </Router>
    )

    expect(registerForm).toMatchSnapshot()
  })
})