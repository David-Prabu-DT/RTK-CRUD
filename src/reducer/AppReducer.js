import React from "react";
import axios from "axios";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return {
        ...state,
        employees: action.payload,
      };

    case "ADD_EMPLOYEE": {
      let content = action.payload;

      axios
        .post("http://localhost:3333/employees", content)
        .then((res) => {
          alert("User Added Successfully !!");
        })
        .catch((err) => {
          console.log(err);
        });

      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    }

    case "EDIT_EMPLOYEE":
      const updatedEmployee = action.payload;

      axios
        .patch(
          `http://localhost:3333/employees/${parseInt(updatedEmployee.id)}`,
          updatedEmployee
        )
        .then((res) => {
          alert("User Updated Successfully !!");
        })
        .catch((err) => {
          console.log(err);
        });

      const updatedEmployees = state.employees.map((employee) => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return employee;
      });

      return {
        ...state,
        employees: updatedEmployees,
      };

    case "DELETE_EMPLOYEE":
      axios
        .delete(process.env.REACT_APP_API_URL + "/" + parseInt(action.payload))
        .then((res) => {
          alert("User Deleted Successfully !!");
        });

      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default AppReducer;
