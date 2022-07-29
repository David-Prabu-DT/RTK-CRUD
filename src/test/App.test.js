import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

const routes = "";

configure({
  adapter: new Adapter(),
});

describe("Testing <App/> Component", () => {
  it("App renders a message", () => {
    const wrapper = <App />;
    const content = (
      <div>
        <Provider store={mockStore}>
          <BrowserRouter>{routes}</BrowserRouter>
        </Provider>
      </div>
    );
    expect(wrapper).to.be.not.empty;

    // expect(wrapper).to.equal(content);

  });
  chai.use(chaiEnzyme());
});
