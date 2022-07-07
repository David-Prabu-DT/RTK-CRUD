"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var EmployeeService_1 = require("../../services/EmployeeService");
var initialState = {};
var EmployeeSlice = (0, toolkit_1.createSlice)({
    name: "employees",
    initialState: initialState,
    reducers: {
        getEmployees: function (action) {
            return action.payload.data;
        },
        addEmployee: function (action) {
            var content = action.payload;
            EmployeeService_1.default.AddEmployee(content);
        },
        editEmployee: function (action) {
            var content = action.payload;
            EmployeeService_1.default.EditEmployee(content);
        },
        deleteEmployee: function (action) {
            var id = action.payload;
            EmployeeService_1.default.DeleteEmployee(id);
        },
    },
});
exports.default = EmployeeSlice;
