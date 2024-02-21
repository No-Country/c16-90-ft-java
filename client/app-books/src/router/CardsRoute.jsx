import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetails from "../components/CardDetails";

const CardsRoute = () => {
  return (
    <Routes>
      <Route path="/detail/:id" element={<CardDetails />} />
    </Routes>
  );
};

export default CardsRoute;
