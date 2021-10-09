import { render } from "@testing-library/react"
import React from "react"
import AuthPage from "./index"

describe("Auth page", () => {
  it("Index renders", () => {
    const { getByLabelText } = render(<AuthPage/>)

    expect(getByLabelText("Email")).toHaveAttribute("name", "email")
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password")
  })

  it("Index snapshot", () => {
    const authPage = render(<AuthPage/>)

    expect(authPage).toMatchSnapshot()
  })
})