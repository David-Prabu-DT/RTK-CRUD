import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import EmployeeService from "../../services/EmployeeService";
import { useDispatch } from "react-redux";

const initialState = {};

const EmployeeSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    getEmployees(state, action) {
      return action.payload.data;
    },

    addEmployee(state, action) {
      let content = action.payload;
      EmployeeService.AddEmployee(content);
    },
    editEmployee(state, action) {},

    deleteEmployee(state, action) {
      let id = action.payload;
      EmployeeService.DeleteEmployee(id);
    },
  },
});

export default EmployeeSlice;
