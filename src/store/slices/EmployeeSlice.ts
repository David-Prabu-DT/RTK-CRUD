import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EmployeeService from "../../services/EmployeeService";
import { empModel } from "../../models/redux-models";

const initialState = {};

interface empId {
  id: number;
}

const EmployeeSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    getEmployees(_state, action: any) {
      // console.log(action.payload);

      return action.payload.data.data.employees;
    },
    addEmployee(_state, action: PayloadAction<empModel>) {
      let content = action.payload;
      EmployeeService.AddEmployee(content);
    },
    editEmployee(_state, action: PayloadAction<empModel>) {
      let content = action.payload;
      EmployeeService.EditEmployee(content);
    },

    deleteEmployee(_state, action: any) {
      let id = action.payload;
      EmployeeService.DeleteEmployee(id);
    },
  },
});

export default EmployeeSlice;
