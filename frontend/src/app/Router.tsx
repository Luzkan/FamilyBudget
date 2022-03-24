import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import LoggedPage from "../pages/logged";

const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="budgets" element={<LoggedPage />} />
    <Route path="*" element={<LandingPage />} />
  </Routes>
);

export default Router;
