import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Adventure from "./Components/Adventure";
import SciencieFiction from "./Components/SciencieFiction";
import Detective from "./Components/Detective";
import HorrorSuspense from "./Components/HorrorSuspense";
import Romantic from "./Components/Romantic";
import Poem from "./Components/Poem";

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
