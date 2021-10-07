import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Header from "./index"

describe("Header component", () => {
  it("Header renders", () => {
    render(<Header/>)

    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })

  it("openMenu works", () => {
    render(<Header/>)
    const burger = document.querySelector(".burgerBtn")
    const nav = screen.getByRole("navigation")
    userEvent.click(burger)

    expect(nav).toHaveClass("navbar_open")
  })

  it("closeMenu works", () => {
    render(<Header/>)
    const burger = document.querySelector(".burgerBtn")
    userEvent.click(burger)
    const closeBtn = document.querySelector(".closeBtn")
    const nav = screen.getByRole("navigation")
    userEvent.click(closeBtn)

    expect(nav).not.toHaveClass("navbar_open")
  })

  it("Header snapshot", () => {
    const header = render(<Header/>)

    expect(header).toMatchSnapshot()
  })
})
