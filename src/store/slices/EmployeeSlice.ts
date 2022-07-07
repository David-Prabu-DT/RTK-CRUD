import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EmployeeService from "../../services/EmployeeService";

const initialState = {};

const EmployeeSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    getEmployees(action: any) {
      return action.payload.data;
    },

    addEmployee(action: any) {
      let content = action.payload;
      EmployeeService.AddEmployee(content);
    },
    editEmployee(action: any) {
      let content = action.payload;
      EmployeeService.EditEmployee(content);
    },

    deleteEmployee(action: any) {
      let id = action.payload;
      EmployeeService.DeleteEmployee(id);
    },
  },
});

export default EmployeeSlice;
