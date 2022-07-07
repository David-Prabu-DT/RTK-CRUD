"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("../../store");
var EmployeeService_1 = require("../../services/EmployeeService");
var react_error_boundary_1 = require("react-error-boundary");
var EmployeeList = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleError = (0, react_error_boundary_1.useErrorHandler)();
    var _a = (0, react_1.useState)(true), loading = _a[0], setLoading = _a[1];
    var employees = (0, react_redux_1.useSelector)(function (state) { return state.employees; });
    console.log(employees);
    (0, react_1.useEffect)(function () {
        EmployeeService_1.default.FetchEmployees(dispatch, handleError);
        setLoading(false);
    }, []);
    var RemoveEmployee = function (id) {
        dispatch(store_1.employeeActions.deleteEmployee(id));
        EmployeeService_1.default.FetchEmployees(dispatch);
    };
    return (<>
      <div className="mt-3">
        {employees &&
            (employees.length > 0 ? (<>
              <react_bootstrap_1.Table striped bordered hover className="mt-3 bg-light rounded">
                <thead>
                  <tr className="text-center">
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Designation</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(function (employee, i) { return (<tr key={i} className="align-middle text-center text-capitalize">
                      <td>{i + 1}</td>
                      <td>{employee.ename}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.location}</td>
                      <td className="d-flex justify-content-around">
                        <react_router_dom_1.Link className="btn btn-primary" to={"/edit/".concat(employee.id)} title="Edit Employee">
                          Edit
                        </react_router_dom_1.Link>
                        <react_bootstrap_1.Button onClick={function () { return RemoveEmployee(employee.id); }} className="btn btn-danger">
                          Delete
                        </react_bootstrap_1.Button>
                      </td>
                    </tr>); })}
                </tbody>
              </react_bootstrap_1.Table>
            </>) : (<h3 className="fw-light text-center">
              {loading ? "Loading..." : "No Employee Found"}
            </h3>))}
      </div>
    </>);
};
exports.default = EmployeeList;
