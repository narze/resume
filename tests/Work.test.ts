import Work from "../src/Work.svelte"
import { render } from "@testing-library/svelte"

describe("Work Component", () => {
  test("it exists", async () => {
    const { component } = render(Work, {})

    expect(component).toBeDefined()
  })

  test("it renders the info from attributes", async () => {
    const { getByText } = render(Work, {
      position: "Web Developer",
      company: "My Company",
      url: "https://example.com",
      years: [2019, 2021],
      details: ["Developed A", "Lead team B"],
    })

    expect(getByText("Web Developer")).toBeInTheDocument()
    expect(getByText("My Company")).toBeInTheDocument()
    expect(getByText("2019-2021")).toBeInTheDocument()
    expect(getByText("Developed A")).toBeInTheDocument()
    expect(getByText("Lead team B")).toBeInTheDocument()
  })
})
