import { render } from "@testing-library/react"
import React from "react"
import MapPage from "./MapPage"

describe("Map Page", () => {
  it("MapPage renders", () => {
    const { container } = render(<MapPage/>)

    expect(container.innerHTML).toMatch("mapPage")
  })

  it("MapPage snapshot", () => {
    const mapPage = render(<MapPage/>)

    expect(mapPage).toMatchSnapshot()
  })
})