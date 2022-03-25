import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLanding from "../pages/landing";
import PageLogged from "../pages/logged";

const Router = () => (
  <Routes>
    <Route path="/" element={<PageLanding />} />
    <Route path="budgets" element={<PageLogged />} />
    <Route path="*" element={<PageLanding />} />
  </Routes>
);

export default Router;
