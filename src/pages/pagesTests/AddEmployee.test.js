import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import AddEmployee from "../AddEmployee";

const middlewares = [thunk];
const store = configureStore({
  reducer: {},
  middleware: middlewares,
});

describe("<AddEmployee/>", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <AddEmployee />
        </Router>
      </Provider>
    );
  });

  it("Renders the form", () => {
    const nameInput = screen.getByTestId("empName");
    const mobileInput = screen.getByTestId("phoneNumber");
    const designationInput = screen.getByTestId("designation");
    const locationInput = screen.getByTestId("location");
    const addBtn = screen.getByTestId("addBtn");
    const cancelBtn = screen.getByTestId("cancelBtn");

    expect(nameInput).toBeInTheDocument();
    expect(designationInput).toBeInTheDocument();
    expect(mobileInput).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });

  it("Submits the form", () => {
    const nameInput = screen.getByTestId("empName");
    const mobileInput = screen.getByTestId("phoneNumber");
    const designationInput = screen.getByTestId("designation");
    const locationInput = screen.getByTestId("location");

    fireEvent.change(nameInput, { target: { value: "Some Value" } });
    fireEvent.change(mobileInput, {
      target: { value: "1212121211", length: 10 },
    });
    fireEvent.change(designationInput, { target: { value: "Some Value" } });
    fireEvent.change(locationInput, { target: { value: "Some Value" } });
    expect(nameInput).toHaveTextContent("");
    expect(mobileInput).toBeInTheDocument("");
    expect(designationInput).toHaveTextContent("");
    expect(locationInput).toHaveTextContent("");
  });
});
