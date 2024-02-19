import React from "react";
import Tables from "../pages/Tables";
import Settings from "../pages/Settings";
import { Route, Routes } from "react-router-dom";
import PageTitle from "../components/Admin/PageTitle";

const DashboardAdminRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard*"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/books/table"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/books/create"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default DashboardAdminRoute;
