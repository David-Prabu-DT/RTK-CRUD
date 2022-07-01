import React from "react";
import TestApiForm from "./TestApiForm";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as apiServiceMock from "./api";
import { act } from "react-dom/test-utils";

jest.mock("./api");

describe("Mock api Test", () => {
  it("Api test", async () => {
    apiServiceMock.postProducts.mockResolvedValueOnce({ ok: true });
    render(<TestApiForm />);
    const inputField = screen.getByLabelText(/Body:/i);
    const submitBtn = screen.getByText(/Post/i);

    act(() => {
      fireEvent.change(inputField, { target: { value: "Sample Title" } });
      fireEvent.click(submitBtn);
    });

    expect(apiServiceMock.postProducts).toHaveBeenCalledTimes(1);
    expect(apiServiceMock.postProducts).toHaveBeenCalledWith("Sample Title");
    //  await waitFor(() => null);
  });
});
