import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BoxList from "./BoxList";

it("should render BoxList without crashing", () => {
  render(<BoxList />)
})

it("should match snapshot", () => {
  const { asFragment } = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot();
})