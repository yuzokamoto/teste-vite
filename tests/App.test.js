import { screen, render } from "@testing-library/react"
import Header from "../src/components/Header"

jest.mock("react-router-dom", () => {
  return {
    useNavigate: jest.fn()
  }
})

describe("Header", () => {
  test("Should render", () => {
    render(<Header />)

    const button = screen.getByText("Deslogar")

    expect(button).toBeInTheDocument()
  })
})