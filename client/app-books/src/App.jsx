import "./App.css";

import SearchBarRoute from "./router/SearchBarRoute";
import DashboardAdminRoute from "./router/DashboardAdminRoute";
import CardsRoute from "./router/CardsRoute";
import { Footer } from "./Components/Footer";
import { ScrollUpButton } from "./Components/ScrollUpButton";

function App() {
  return (
    <main>
      <SearchBarRoute />
      <DashboardAdminRoute />
      {/* <Footer /> */}
      <ScrollUpButton />
    </main>
  );
}

export default App;
