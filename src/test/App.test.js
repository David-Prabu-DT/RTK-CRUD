import React from "react";
import ReactDom from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";
let expect = require("chai").expect;

const ExampleComponentFactory = React.createFactory(App);

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders", () => {
    act(() => {
      ReactDOM.render(App, rootContainer);
    });
  });
});
