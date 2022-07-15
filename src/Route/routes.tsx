import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "../pages/addEmployee/AddEmployee";
import Dashboard from "../pages/DashBoard/Dashboard";
import EditEmployee from "../pages/editEmployee/EditEmployee";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const Home = lazy(() => import("../pages/home/Home"));

const routes = (
  <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/login" element={<Login />} />

    <Route
      path="/employees"
      element={
        <Suspense fallback={<h4 className="text-center">Still Loading…</h4>}>
          <Home />
        </Suspense>
      }
    />
    <Route path="/add" element={<AddEmployee />} />
    <Route path="/edit/:id" element={<EditEmployee />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default routes;
