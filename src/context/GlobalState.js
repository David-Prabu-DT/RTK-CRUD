import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "../reducer/AppReducer";
import axios from "axios";

const initialState = {};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL).then((response) => getEmployees(response.data));
  }, []);

  function getEmployees(employees) {
    dispatch({
      type: "GET_EMPLOYEES",
      payload: employees,
    });
  }

  function addEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee,
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee,
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        getEmployees,
        addEmployee,
        editEmployee,
        removeEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
