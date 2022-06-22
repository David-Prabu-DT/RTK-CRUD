import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<AddEmployee />} />
    <Route path="/edit/:id" element={<EditEmployee />} />
  </Routes>
);

export default routes;
