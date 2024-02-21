import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Adventure from "./Components/Adventure";
import SciencieFiction from "./Components/SciencieFiction";
import Detective from "./Components/Detective";
import HorrorSuspense from"./Components/HorrorSuspense";
import Romantic from"./Components/Romantic";
import Poem from"./Components/Poem"




import SearchBarRoute from "./router/SearchBarRoute";
import DashboardAdminRoute from "./router/DashboardAdminRoute";

function App() {
  return (
<<<<<<< HEAD
    <main>
      <SearchBarRoute />

      <DashboardAdminRoute />
    </main>
=======
    <BrowserRouter>
      <div>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/adventure" element={<Adventure/>}/>
            <Route path="/scincieFiction" element={<SciencieFiction/>}/>
            <Route path="/detective" element={<Detective/>}/>
            <Route path="/horrorSuspense" element={<HorrorSuspense/>}/>
            <Route path="/romantic" element={<Romantic/>}/>
            <Route path="/poem" element={<Poem/>}/>


          </Routes>
        </main>
      </div>
    </BrowserRouter>
>>>>>>> 1fa4d5a11c6ad6ffdc940935bc428e2c2a8d77f2
  );
}

export default App;
