import "./App.css";

import SearchBarRoute from "./router/SearchBarRoute";
import DashboardAdminRoute from "./router/DashboardAdminRoute";
import CardsRoute from "./router/CardsRoute";

function App() {
  return (
    <main>
      <SearchBarRoute />
      <DashboardAdminRoute />
      {/* <CardsRoute /> */}
    </main>
  );
}

export default App;
