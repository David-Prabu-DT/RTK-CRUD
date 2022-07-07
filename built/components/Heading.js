"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
var Heading = function () {
    return (<div>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="fw-light">Employee listing</h4>
        </div>
        <div>
          <react_router_dom_1.Link to={"/add"}>
            <react_bootstrap_1.Button className="btn btn-success">Add Employee</react_bootstrap_1.Button>
          </react_router_dom_1.Link>
        </div>
      </div>
    </div>);
};
exports.default = Heading;
