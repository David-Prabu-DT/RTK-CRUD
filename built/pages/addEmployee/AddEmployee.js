"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var react_redux_1 = require("react-redux");
var store_1 = require("../../store");
var EmployeeService_1 = require("../../services/EmployeeService");
var AddEmployee = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_1.useState)(""), ename = _a[0], setEname = _a[1];
    var _b = (0, react_1.useState)(""), phone = _b[0], setPhone = _b[1];
    var _c = (0, react_1.useState)(""), location = _c[0], setLocation = _c[1];
    var _d = (0, react_1.useState)(""), designation = _d[0], setDesignation = _d[1];
    var employees = (0, react_redux_1.useSelector)(function (state) { return state.employees; });
    (0, react_1.useEffect)(function () {
        EmployeeService_1.default.FetchEmployees(dispatch);
    }, []);
    var formSubmit = function (e) {
        e.preventDefault();
        var newEmployee = {
            id: employees.length + 1,
            ename: ename,
            phone: phone,
            designation: designation,
            location: location,
        };
        dispatch(store_1.employeeActions.addEmployee(newEmployee));
        EmployeeService_1.default.FetchEmployees(dispatch);
        navigate("/", { replace: true });
    };
    return (<>
      <react_bootstrap_1.Container>
        <react_bootstrap_1.Row style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
          <react_bootstrap_1.Col md={4}>
            <h3 className="text-center fw-light">Add Employee</h3>
            <react_bootstrap_1.Form onSubmit={formSubmit} className="p-5 border border-secondary rounded">
              <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicEmail">
                <react_bootstrap_1.Form.Label>Employee Name</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="text" value={ename} data-testid="empName" maxLength={20} onChange={function (e) { return setEname(e.target.value); }} placeholder="Enter Name"/>
              </react_bootstrap_1.Form.Group>
              <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicEmail">
                <react_bootstrap_1.Form.Label>Phone Number</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="text" data-testid="phoneNumber" value={phone} maxLength={10} onChange={function (e) { return setPhone(e.target.value); }} placeholder="Enter Phone Number"/>
              </react_bootstrap_1.Form.Group>

              <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicPassword">
                <react_bootstrap_1.Form.Label>Designation</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="text" data-testid="designation" value={designation} onChange={function (e) { return setDesignation(e.target.value); }} placeholder="Enter Designation"/>
              </react_bootstrap_1.Form.Group>

              <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicPassword">
                <react_bootstrap_1.Form.Label>Location</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="text" data-testid="location" value={location} onChange={function (e) { return setLocation(e.target.value); }} placeholder="Enter Location"/>
              </react_bootstrap_1.Form.Group>

              <div className="d-flex justify-content-between">
                <react_bootstrap_1.Button variant="primary" data-testid="addBtn" type="submit">
                  Add Employee
                </react_bootstrap_1.Button>

                <react_router_dom_1.Link to="/">
                  <react_bootstrap_1.Button variant="warning" data-testid="cancelBtn" type="button">
                    Cancel
                  </react_bootstrap_1.Button>
                </react_router_dom_1.Link>
              </div>
            </react_bootstrap_1.Form>
          </react_bootstrap_1.Col>
        </react_bootstrap_1.Row>
      </react_bootstrap_1.Container>
    </>);
};
exports.default = AddEmployee;
