import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Adventure from "./components/Adventure";
import SciencieFiction from "./components/SciencieFiction";
import Detective from "./components/Detective";
import HorrorSuspense from "./components/HorrorSuspense";
import Romantic from "./components/Romantic";
import Poem from "./components/Poem";

import SearchBarRoute from "./router/SearchBarRoute";
import DashboardAdminRoute from "./router/DashboardAdminRoute";

function App() {
  return (
    <main>
      <SearchBarRoute />

      <DashboardAdminRoute />
    </main>
  );
}

export default App;
