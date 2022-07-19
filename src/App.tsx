import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Route/routes";
import store from "./store";
import Layout from "./layout/Layout";
import Home from "./views/home/Home";
import Profile from "./views/profile/Profile";
import Settings from "./views/settings/Settings";

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          {routes}

          <Layout>
            <Routes>
              <Route path="/panel" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
