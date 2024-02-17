import React from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const SearchBar = () => {

  const navigate = useNavigate()

  const {state} =  useLocation()

  const onLogOut = () => {
    navigate('/', {
      replace : true,
    })
  }
  return (
    <>
          {
            state?.logged ?(
              <div className="flex items-center justify-between bg-gray-400 p-4 rounded">
                <div className="flex items-center text-2xl font-bold">
                  <Link to='/'>Logo</Link>
                </div>
                <div className="flex items-center gap-5 ">
                  <span className='userName'>{state?.name}</span>
                  <button className='' onClick={onLogOut}>Cerrar sesión</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-gray-400 p-4 rounded">
                <div className="flex items-center text-2xl font-bold">
                  <Link to='/'>Logo</Link>
                </div>
                <nav className='flex items-center gap-5 '>
                  <NavLink to='/login'>Iniciar sesión</NavLink>
                  <NavLink to='/signup'>Registrarse</NavLink>
                </nav>
              </div>
            )
          }
        <Outlet/>
    </>
  )
}

export default SearchBar
