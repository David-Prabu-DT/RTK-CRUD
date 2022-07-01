import React, { Component, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import routes from "../src/Route/routes";
import store from "./store";


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>{routes}</BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
