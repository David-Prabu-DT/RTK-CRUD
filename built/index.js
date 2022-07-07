"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
require("bootstrap/dist/css/bootstrap.min.css");
var container = document.getElementById("root");
var root = (0, client_1.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render(<App_1.default />);
