import React from "react";
import { Route, useLocation, Routes } from "react-router-dom";

const Security = (_props) => {
  let path = useLocation();
  console.log("security", path);
  return (
    <Routes>
      <Route path={`${path}/credentials`}>Credentials</Route>
      <Route path={`${path}/2fa`}>Two factor authentication</Route>
    </Routes>
  );
};

export default Security;
