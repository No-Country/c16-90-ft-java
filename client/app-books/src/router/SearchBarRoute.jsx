import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home/Home";
import SignupPage from "../pages/SignupPage";
import Tables from "../pages/Tables";
import Settings from "../pages/Settings";
import PageTitle from "../components/Admin/PageTitle";
import DashboardAdminRoute from "./DashboardAdminRoute";

const SearchBarRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchBar />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardAdminRoute />} />
      </Routes>
    </>
  );
};

export default SearchBarRoute;
