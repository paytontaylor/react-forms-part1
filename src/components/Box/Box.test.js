import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import Box from "./Box";

it("should render Box without crashing", () => {
  render(<Box />)
})

it("should match snapshot", () => {
  const { asFragment } = render(<Box />)
  expect(asFragment()).toMatchSnapshot();
})

it("should display a div with height, weight, and color props as dimensions", () => {
  render(<Box height={10} width={10} backgroundColor="red" />)

  const boxDiv = screen.getByTestId("boxDiv");
  expect(boxDiv).toBeInTheDocument();
  expect(boxDiv).toHaveStyle({ height: "10px", width: "10px", backgroundColor: "red" })
})