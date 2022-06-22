import React, { Component, useEffect } from "react";
import routes from "../src/Route/routes";
import { ErrorBoundary } from "react-error-boundary";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      {/* <Greeting /> */}
      {routes}
    </div>
  );
}

export default App;
