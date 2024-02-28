import "./App.css";

import SearchBarRoute from "./router/SearchBarRoute";
import DashboardAdminRoute from "./router/DashboardAdminRoute";
import CardsRoute from "./router/CardsRoute";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <main>
      <SearchBarRoute />
      <DashboardAdminRoute />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
