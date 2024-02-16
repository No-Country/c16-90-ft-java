import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-gray-400 p-4 rounded">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-gray-700 text-white px-4 py-2 rounded"
          />
        </div>
        <div className="flex items-center  ">
          <nav className='flex items-center gap-4'>
            <NavLink to='/login'>Iniciar sesión</NavLink>
            <NavLink to='/signup'>Registrarse</NavLink>
          </nav>
        </div>
      </div>
    </>
  )
}

export default SearchBar
