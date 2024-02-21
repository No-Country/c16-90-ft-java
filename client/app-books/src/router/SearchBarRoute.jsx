import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import LoginPage from "../pages/LoginPage";
import Home from "../components/Home/Home";
import SignupPage from "../pages/SignupPage";
import DashboardAdminRoute from "./DashboardAdminRoute";
import CardDetails from "../components/CardDetails";

const SearchBarRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchBar />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/detail/:id" element={<CardDetails />} />
        </Route>
        <Route path="/dashboard" element={<DashboardAdminRoute />} />
      </Routes>
    </>
  );
};

export default SearchBarRoute;
