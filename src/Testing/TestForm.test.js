import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestForm from "./TestForm";

describe("Form Testing", () => {
  it("renders the form correctly", () => {
    render(<TestForm />);
    const nameLabel = screen.getByText(/Name:/i);
    const ageLabel = screen.getByText(/Age:/i);

    expect(nameLabel).toBeInTheDocument();
    expect(ageLabel).toBeInTheDocument();
  });

  it("submit button should be disabled when Name is empty", () => {
    render(<TestForm />);
    const nameLabel = screen.getByLabelText(/Name:/i);
    const submitBtn = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(nameLabel, { target: { value: "" } });
    expect(submitBtn).toHaveAttribute("disabled");
    fireEvent.change(nameLabel, { target: { value: "John Doe" } });
    expect(submitBtn).not.toHaveAttribute("disabled");
  });
});
