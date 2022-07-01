import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";
import TestForm from "../Testing/TestForm";

const Home = lazy(() => import("../pages/Home"));

const routes = (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<h4 className="text-center">Still Loading…</h4>}>
          <Home />
        </Suspense>
      }
    />
    <Route path="/add" element={<AddEmployee />} />
    <Route path="/edit/:id" element={<EditEmployee />} />
    <Route path="/test-form" element={<TestForm />} />
  </Routes>
);

export default routes;
