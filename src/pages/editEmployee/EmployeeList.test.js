import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, mount } from "@testing-library/react";
import EmployeeList from "../employeeList/EmployeeList";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const middlewares = [thunk];
const store = configureStore({
  reducer: {},
  middleware: middlewares,
});

describe("<EmployeeList/>", () => {
  render(
    <Provider store={store}>
      <Router>
        <EmployeeList />
      </Router>
    </Provider>
  );
  it("Renders the Table", () => {});
});
