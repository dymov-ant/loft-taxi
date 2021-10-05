import { render } from "@testing-library/react"
import React from "react"
import MapPage from "./MapPage"

describe("MapPage", () => {
  it("renders correctly", function () {
    const { container } = render(<MapPage/>)
    expect(container.innerHTML).toMatch("mapPage")
  })
})