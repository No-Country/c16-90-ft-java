import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home/Home";
import SignupPage from'../pages/SignupPage'

const SearchBarRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchBar />}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default SearchBarRoute;
