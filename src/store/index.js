import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from "./slices/EmployeeSlice";

const store = configureStore({
  reducer: { employees: EmployeeSlice.reducer },
});

export const employeeActions = EmployeeSlice.actions;
export default store;
