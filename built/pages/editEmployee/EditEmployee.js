"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var EmployeeService_1 = require("../../services/EmployeeService");
var store_1 = require("../../store");
var EditEmployee = function () {
    var id = (0, react_router_dom_1.useParams)().id;
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var employees = (0, react_redux_1.useSelector)(function (state) { return state.employees; });
    var _a = (0, react_1.useState)(false), filter = _a[0], setFilter = _a[1];
    var _b = (0, react_1.useState)({
        id: null,
        ename: "",
        phone: "",
        designation: "",
        location: "",
    }), currentUser = _b[0], setCurrentUser = _b[1];
    (0, react_1.useEffect)(function () {
        EmployeeService_1.default.FetchEmployees(dispatch);
        var currentEmployee = Array.isArray(employees) &&
            employees.find(function (employee) { return employee.id === parseInt(id); });
        setCurrentUser(currentEmployee);
        setFilter(true);
    }, []);
    var handleChange = function (key, value) {
        var _a;
        setCurrentUser(__assign(__assign({}, currentUser), (_a = {}, _a[key] = value, _a)));
    };
    var formSubmit = function (e) {
        e.preventDefault();
        dispatch(store_1.employeeActions.editEmployee(currentUser));
        EmployeeService_1.default.FetchEmployees(dispatch);
        navigate("/");
    };
    return (<>
      <react_bootstrap_1.Container>
        <react_bootstrap_1.Row style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
          <react_bootstrap_1.Col md={4}>
            <h3 className="text-center fw-light">Edit Employee</h3>
            {filter && (<react_bootstrap_1.Form onSubmit={formSubmit} className="p-5 border border-secondary rounded">
                <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicEmail">
                  <react_bootstrap_1.Form.Label>Employee Name</react_bootstrap_1.Form.Label>
                  <react_bootstrap_1.Form.Control type="text" value={currentUser.ename} maxLength={20} onChange={function (e) { return handleChange("ename", e.target.value); }} placeholder="Enter Name"/>
                </react_bootstrap_1.Form.Group>

                <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicPassword">
                  <react_bootstrap_1.Form.Label>Phone Number</react_bootstrap_1.Form.Label>
                  <react_bootstrap_1.Form.Control type="text" value={currentUser.phone} maxLength={10} onChange={function (e) { return handleChange("phone", e.target.value); }} placeholder="Enter Designation"/>
                </react_bootstrap_1.Form.Group>

                <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicPassword">
                  <react_bootstrap_1.Form.Label>Designation</react_bootstrap_1.Form.Label>
                  <react_bootstrap_1.Form.Control type="text" value={currentUser.designation} onChange={function (e) {
                return handleChange("designation", e.target.value);
            }} placeholder="Enter Designation"/>
                </react_bootstrap_1.Form.Group>

                <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicPassword">
                  <react_bootstrap_1.Form.Label>Location</react_bootstrap_1.Form.Label>
                  <react_bootstrap_1.Form.Control type="text" value={currentUser.location} onChange={function (e) { return handleChange("location", e.target.value); }} placeholder="Enter Location"/>
                </react_bootstrap_1.Form.Group>

                <div className="d-flex justify-content-between">
                  <react_bootstrap_1.Button variant="primary" type="submit">
                    Edit Employee
                  </react_bootstrap_1.Button>

                  <react_router_dom_1.Link to="/">
                    <react_bootstrap_1.Button variant="warning" type="button">
                      Cancel
                    </react_bootstrap_1.Button>
                  </react_router_dom_1.Link>
                </div>
              </react_bootstrap_1.Form>)}
          </react_bootstrap_1.Col>
        </react_bootstrap_1.Row>
      </react_bootstrap_1.Container>
    </>);
};
exports.default = EditEmployee;
