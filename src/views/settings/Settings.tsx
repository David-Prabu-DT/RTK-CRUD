import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Security from "../Security";
const Settings = (_props) => {
  let path = useLocation();
  return (
    <div>
      <Routes>
        <Route path={`${path}/account`}>Account</Route>
        <Route path={`${path}/security`}>
          <Security />
        </Route>
      </Routes>
    </div>
  );
};

export default Settings;
