import { configureStore, Middleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import EmployeeSlice from "./slices/EmployeeSlice";


const store = configureStore({
  reducer: { employees: EmployeeSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: <any>{},
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const employeeActions = EmployeeSlice.actions;
export default store;
