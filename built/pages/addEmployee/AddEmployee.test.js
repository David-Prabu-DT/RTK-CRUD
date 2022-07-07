"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("@testing-library/jest-dom");
var react_2 = require("@testing-library/react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var redux_thunk_1 = require("redux-thunk");
var toolkit_1 = require("@reduxjs/toolkit");
var AddEmployee_1 = require("../AddEmployee");
var middlewares = [redux_thunk_1.default];
var store = (0, toolkit_1.configureStore)({
    reducer: {},
    middleware: middlewares,
});
describe("<AddEmployee/>", function () {
    beforeEach(function () {
        (0, react_2.render)(<react_redux_1.Provider store={store}>
        <react_router_dom_1.BrowserRouter>
          <AddEmployee_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>);
    });
    it("Renders the form", function () {
        var nameInput = react_2.screen.getByTestId("empName");
        var mobileInput = react_2.screen.getByTestId("phoneNumber");
        var designationInput = react_2.screen.getByTestId("designation");
        var locationInput = react_2.screen.getByTestId("location");
        var addBtn = react_2.screen.getByTestId("addBtn");
        var cancelBtn = react_2.screen.getByTestId("cancelBtn");
        expect(nameInput).toBeInTheDocument();
        expect(designationInput).toBeInTheDocument();
        expect(mobileInput).toBeInTheDocument();
        expect(locationInput).toBeInTheDocument();
        expect(addBtn).toBeInTheDocument();
        expect(cancelBtn).toBeInTheDocument();
    });
    it("Submits the form", function () {
        var nameInput = react_2.screen.getByTestId("empName");
        var mobileInput = react_2.screen.getByTestId("phoneNumber");
        var designationInput = react_2.screen.getByTestId("designation");
        var locationInput = react_2.screen.getByTestId("location");
        react_2.fireEvent.change(nameInput, { target: { value: "Some Value" } });
        react_2.fireEvent.change(mobileInput, {
            target: { value: "1212121211", length: 10 },
        });
        react_2.fireEvent.change(designationInput, { target: { value: "Some Value" } });
        react_2.fireEvent.change(locationInput, { target: { value: "Some Value" } });
        expect(nameInput).toHaveTextContent("");
        expect(mobileInput).toBeInTheDocument("");
        expect(designationInput).toHaveTextContent("");
        expect(locationInput).toHaveTextContent("");
    });
});
