"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_error_boundary_1 = require("react-error-boundary");
var Heading_1 = require("../../components/Heading");
var EmployeeList_1 = require("../employeeList/EmployeeList");
function ErrorFallback(_a) {
    var error = _a.error, resetErrorBoundary = _a.resetErrorBoundary;
    console.log("Fall back UI Called");
    return (<div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>);
}
var Home = function () {
    return (<div>
      <react_bootstrap_1.Container className="mt-5">
        <h3 className="text-center">Employee CRUD App</h3>
        <Heading_1.default />
        <react_error_boundary_1.ErrorBoundary FallbackComponent={ErrorFallback} onReset={function () {
            // reset the state of your app so the error doesn't happen again
        }}>
          <EmployeeList_1.default />
        </react_error_boundary_1.ErrorBoundary>
      </react_bootstrap_1.Container>
    </div>);
};
exports.default = Home;
