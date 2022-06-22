import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello texts", () => {
  // Arrange
  render(<Greeting />);

  // Act
  //...nothing

  // Assert
  const testElement = screen.getByText("Hello");
  expect(testElement).toBeInTheDocument();
});
