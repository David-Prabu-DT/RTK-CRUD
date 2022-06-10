import React, { Component, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddEmployee />} exact />
          <Route path="/edit/:id" element={<EditEmployee />} exact />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
