"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var store_1 = require("../store");
var API_URL = process.env.REACT_APP_API_URL;
var FetchEmployees = function (dispatch, handleError) {
    axios_1.default
        .get("".concat(API_URL, "/employees"))
        .then(function (_res, data) {
        dispatch(store_1.employeeActions.getEmployees(_res));
    })
        .catch(function (err) {
        handleError(err);
    });
};
var AddEmployee = function (content) {
    axios_1.default
        .post("".concat(API_URL, "/employees"), content)
        .then(function (data) { return console.log(data); })
        .then(function (res) {
        console.log(res);
        alert("User Added Successfully !!");
    })
        .catch(function (err) {
        console.log(err);
    });
};
var EditEmployee = function (updatedEmployee) {
    axios_1.default
        .patch("".concat(API_URL, "/employees/").concat(updatedEmployee.id), updatedEmployee)
        .then(function (_res) {
        alert("User Updated Successfully !!");
    })
        .catch(function (err) {
        console.log(err);
    });
};
var DeleteEmployee = function (id) {
    axios_1.default.delete("".concat(API_URL, "/employees/").concat(id)).then(function (_res) {
        alert("User Deleted Successfully !!");
    });
};
var EmployeeService = {
    FetchEmployees: FetchEmployees,
    AddEmployee: AddEmployee,
    EditEmployee: EditEmployee,
    DeleteEmployee: DeleteEmployee,
};
exports.default = EmployeeService;
