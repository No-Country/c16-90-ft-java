import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import LoginPage from "../pages/LoginPage";
import Home from ".././Components/Home/Home";
import SignupPage from "../pages/SignupPage";
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
