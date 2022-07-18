import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./Route/routes";
import store from "./store";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          {routes}

          <Layout>
            <Routes>
              
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
