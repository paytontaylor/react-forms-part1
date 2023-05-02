import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import NewBoxForm from "./NewBoxForm";

it("should render NewBoxForm without crashing", () => {
  render(<NewBoxForm />)
})

it("should match snapshot", () => {
  const { asFragment } = render(<NewBoxForm />)
  expect(asFragment()).toMatchSnapshot();
})

it("should call addBox on button click", async () => {
  const mock = jest.fn();

  const {asFragment } = render(<NewBoxForm addBox={mock} />)
  expect(asFragment()).toMatchSnapshot();

  const heightInput = screen.getByLabelText("Height:")
  const widthInput = screen.getByLabelText("Width:")
  const colorInput = screen.getByLabelText("Color:")

  await user.click(heightInput);
  await user.keyboard("10");

  await user.click(widthInput);
  await user.keyboard("10");

  await user.click(colorInput);
  await user.keyboard("red")

  const addBoxBtn = screen.getByRole("button");
  await user.click(addBoxBtn);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ id: expect.any(String) ,height: "10", width: "10", color: "red" })
})