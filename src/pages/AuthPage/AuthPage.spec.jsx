import { render } from "@testing-library/react"
import React from "react"
import AuthPage from "./AuthPage"

describe("AuthPage", () => {
  it("renders correctly", function () {
    const { getByLabelText } = render(<AuthPage/>)

    expect(getByLabelText("Email")).toHaveAttribute("name", "email")
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password")
  })
})