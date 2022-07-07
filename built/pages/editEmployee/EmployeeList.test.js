"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("@testing-library/jest-dom");
var react_2 = require("@testing-library/react");
var EmployeeList_1 = require("../employeeList/EmployeeList");
var redux_thunk_1 = require("redux-thunk");
var toolkit_1 = require("@reduxjs/toolkit");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var middlewares = [redux_thunk_1.default];
var store = (0, toolkit_1.configureStore)({
    reducer: {},
    middleware: middlewares,
});
describe("<EmployeeList/>", function () {
    (0, react_2.render)(<react_redux_1.Provider store={store}>
      <react_router_dom_1.BrowserRouter>
        <EmployeeList_1.default />
      </react_router_dom_1.BrowserRouter>
    </react_redux_1.Provider>);
    it("Renders the Table", function () { });
});
