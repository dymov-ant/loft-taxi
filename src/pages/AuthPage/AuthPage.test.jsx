import { render } from "@testing-library/react"
import React from "react"
import AuthPage from "./AuthPage"

describe("Auth page", () => {
  it("AuthPage renders", () => {
    const { getByLabelText } = render(<AuthPage/>)

    expect(getByLabelText("Email")).toHaveAttribute("name", "email")
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password")
  })

  it("AuthPage snapshot", () => {
    const authPage = render(<AuthPage/>)

    expect(authPage).toMatchSnapshot()
  })
})