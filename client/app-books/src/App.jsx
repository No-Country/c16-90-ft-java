import "./App.css";
import Home from "./components/Home/Home";
import SearchBarRoute from "./router/SearchBarRoute";


function App() {
  return (
    <main>
      <SearchBarRoute/>;
      <Home />
    </main>
  );
}

export default App;
