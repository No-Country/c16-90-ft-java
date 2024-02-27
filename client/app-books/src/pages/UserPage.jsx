import React, {useState} from 'react'
import SideBar from '../Components/User/SideBar'
import { Outlet } from 'react-router-dom'
import Home from '../Components/Home/Home'


const UserPage = () => {

  const [showHome, setShowHome] = useState(true);
  return (
    <div className='flex'>
      <SideBar onNavLinkClick={() => setShowHome(false)}/>
      {showHome && <Home/>}
      <Outlet/>
    </div>
  )
}

export default UserPage
