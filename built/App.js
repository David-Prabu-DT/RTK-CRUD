"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("./Route/routes");
var store_1 = require("./store");
var App = function () {
    return (<div>
      <react_redux_1.Provider store={store_1.default}>
        <react_router_dom_1.BrowserRouter>{routes_1.default}</react_router_dom_1.BrowserRouter>
      </react_redux_1.Provider>
    </div>);
};
exports.default = App;
