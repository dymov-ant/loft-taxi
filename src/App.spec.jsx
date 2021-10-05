import { fireEvent, render } from "@testing-library/react"
import React from "react"
import App from "./App"

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App/>)
    expect(container.innerHTML).toMatch("mapPage")
  })

  describe("when click on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App/>)

      fireEvent.click(getByText("Карта"))
      expect(container.innerHTML).toMatch("mapPage")
      fireEvent.click(getByText("Профиль"))
      expect(container.innerHTML).toMatch("profilePage")
    })
  })
})