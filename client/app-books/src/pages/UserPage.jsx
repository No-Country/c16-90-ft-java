import React from 'react'
import SideBar from '../Components/User/SideBar'
import { Outlet } from 'react-router-dom'

const UserPage = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default UserPage
