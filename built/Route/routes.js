"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AddEmployee_1 = require("../pages/addEmployee/AddEmployee");
var EditEmployee_1 = require("../pages/editEmployee/EditEmployee");
var TestForm_1 = require("../Testing/TestForm");
var Home = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("../pages/home/Home"); }); });
var routes = (<react_router_dom_1.Routes>
    <react_router_dom_1.Route path="/" element={<react_1.Suspense fallback={<h4 className="text-center">Still Loading…</h4>}>
          <Home />
        </react_1.Suspense>}/>
    <react_router_dom_1.Route path="/add" element={<AddEmployee_1.default />}/>
    <react_router_dom_1.Route path="/edit/:id" element={<EditEmployee_1.default />}/>
    <react_router_dom_1.Route path="/test-form" element={<TestForm_1.default />}/>
  </react_router_dom_1.Routes>);
exports.default = routes;
