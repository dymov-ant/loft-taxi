import { render } from "@testing-library/react"
import React from "react"
import ProfilePage from "./ProfilePage"

describe("Profile page", () => {
  it("ProfilePage renders", () => {
    const { container } = render(<ProfilePage/>)

    expect(container.innerHTML).toMatch("profilePage")
  })

  it("MapPage snapshot", () => {
    const profilePage = render(<ProfilePage/>)

    expect(profilePage).toMatchSnapshot()
  })
})