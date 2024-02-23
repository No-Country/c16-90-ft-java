import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-400 p-4 rounded">
      <div className="flex items-center  text-white ">
        <nav className="flex items-center gap-4 text-xl">
          <NavLink to="/adventure">Aventura</NavLink>
          <NavLink to="/scincieFiction">Ciencia ficción</NavLink>
          <NavLink to="/detective">Policiaco</NavLink>
          <NavLink to="/horrorSuspense">Terror y suspenso</NavLink>
          <NavLink to="/romantic">Romántico</NavLink>
          <NavLink to="/poem">Poesía</NavLink>
        </nav>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-gray-700 text-white px-4 py-2 rounded"
        />
      </div>
    </div>
  );
};

export default NavBar;
