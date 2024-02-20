import React from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../images/logo/booklogo1.png'

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
                  <Link to='/'><img src={Logo} alt='logo' className='h-30  rounded-xl'/></Link>
                </div>
                <div className="flex items-center gap-5 ">
                  <span className='userName'>{state?.name}</span>
                  <button className='"bg-buttoncolor  text-yellow-400 font-bold text-xl py-2 px-4 rounded-xl hover:scale-110"' onClick={onLogOut}>Cerrar sesión</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-gray-400 p-4 rounded">
                <div className="flex items-center text-2xl font-bold">
                  <Link to='/'><img src={Logo} alt='logo' className='h-30  rounded-xl'/></Link>
                </div>
                <nav className='flex items-center gap-5 '>
                  <NavLink to='/login' className="bg-buttoncolor  text-yellow-400 font-bold text-xl py-2 px-4 rounded-xl hover:scale-110">Iniciar sesión</NavLink>
                  <NavLink to='/signup' className="bg-buttoncolor  text-yellow-400 font-bold text-xl py-2 px-4 rounded-xl hover:scale-110">Registrarse</NavLink>
                </nav>
              </div>
            )
          }
        <Outlet/>
    </>
  )
}

export default SearchBar
