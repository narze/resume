import Intro from "../src/Intro.svelte"
import { render } from "@testing-library/svelte"

describe("Intro Component", () => {
  test("it exists", async () => {
    const { component } = render(Intro, {
      id: "intro",
    })

    expect(component).toBeDefined()
  })

  test("it renders the info from attributes", async () => {
    const { getByText } = render(Intro, {
      id: "intro",
      name: "John Doe",
      phone: "+66 123 4567",
      email: "john_doe@example.com",
      github: "john_doe_gh",
      linkedin: "john_doe_li",
    })

    expect(getByText("John Doe")).toBeInTheDocument()
    expect(getByText("+66 123 4567")).toBeInTheDocument()
    expect(getByText("john_doe@example.com")).toBeInTheDocument()
    expect(getByText("github.com/john_doe_gh")).toBeInTheDocument()
    expect(getByText("Linkedin")).toBeInTheDocument()
  })
})
