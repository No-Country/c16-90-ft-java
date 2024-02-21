import "./App.css";

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
