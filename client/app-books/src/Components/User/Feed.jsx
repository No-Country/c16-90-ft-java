import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Feed = () => {
  return (
    <div className="w-3/4 bg-blue-500 p-4">
      <Outlet/>
      
    </div>
  )
}

export default Feed
