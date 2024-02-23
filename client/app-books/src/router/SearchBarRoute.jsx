import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SearchBar = lazy(() => import("../Components/SearchBar"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Home = lazy(() => import("../Components/Home/Home"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const DashboardAdminRoute = lazy(() => import("./DashboardAdminRoute"));
const CardDetails = lazy(() => import("../Components/CardDetails"));

const SearchBarRoute = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<SearchBar />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/detail/:id" element={<CardDetails />} />
        </Route>
        <Route path="/dashboard" element={<DashboardAdminRoute />} />
      </Routes>
    </Suspense>
  );
};

export default SearchBarRoute;
