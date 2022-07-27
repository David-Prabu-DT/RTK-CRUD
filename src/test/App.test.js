import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";

configure({
  adapter: new Adapter(),
});

describe("Testing <App/> Component", () => {
  it("App renders a message", () => {
    const wrapper = shallow(<App />);
    const message = (
      <div>
        <Provider store={store}>
          <BrowserRouter>{routes}</BrowserRouter>
        </Provider>
      </div>
    );
    expect(wrapper).to.contain(message);
  });
  chai.use(chaiEnzyme());
});
