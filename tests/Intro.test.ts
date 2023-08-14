import Intro from "../src/Intro.svelte"
import { render } from "@testing-library/svelte"

describe("Intro Component", () => {
  test("it exists", async () => {
    const { component } = render(Intro, {})

    expect(component).toBeDefined()
  })

  test("it renders the info from attributes", async () => {
    const { getByText } = render(Intro, {
      name: "John Doe",
      nickname: "Johnny",
      phone: "+66 123 4567",
      email: "john_doe@example.com",
      github: "john_doe_gh",
      linkedin: "john_doe_li",
      website: "example.com",
    })

    expect(getByText("John Doe")).toBeInTheDocument()
    expect(getByText("(Johnny)")).toBeInTheDocument()
    expect(getByText("+66 123 4567")).toBeInTheDocument()
    expect(getByText("john_doe@example.com")).toBeInTheDocument()
    expect(getByText("github.com/john_doe_gh")).toBeInTheDocument()
    expect(getByText("Linkedin")).toBeInTheDocument()
    expect(getByText("example.com")).toBeInTheDocument()
  })
})
