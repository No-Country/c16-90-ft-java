import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Adventure from "./Components/Adventure";
import SciencieFiction from "./Components/SciencieFiction";
import Detective from "./Components/Detective";
import HorrorSuspense from"./Components/HorrorSuspense";
import Romantic from"./Components/Romantic";
import Poem from"./Components/Poem"




function App() {
  return (
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
  );
}

export default App;
