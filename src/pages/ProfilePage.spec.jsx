import { render } from "@testing-library/react"
import React from "react"
import ProfilePage from "./ProfilePage"

describe("ProfilePage", () => {
  it("renders correctly", function () {
    const { container } = render(<ProfilePage/>)
    expect(container.innerHTML).toMatch("profilePage")
  })
})