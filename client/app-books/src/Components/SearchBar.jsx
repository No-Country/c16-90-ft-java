import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-gray-400 p-4 rounded">
        <div className="flex items-center text-2xl font-bold">
          <Link to='/'>Logo</Link>
        </div>
        <div className="flex items-center  ">
          <nav className='flex items-center gap-4 '>
            <NavLink to='/login'>Iniciar sesión</NavLink>
            <NavLink to='/signup'>Registrarse</NavLink>
          </nav>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default SearchBar
