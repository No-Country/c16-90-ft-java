import React from 'react'
import { AiFillRead, AiFillStar, AiFillHeart, AiFillSetting} from "react-icons/ai";

import {
  Link,
  NavLink,
  Outlet,
  
} from "react-router-dom";
import Profile from './Profile';

const SideBar = () => {
  return (
    <div className="w-1/4 h-screen  p-4 border-r-1 bg-[#292929] text-white">
      <div className='flex items-center justify-center'>
        <Profile/>    
      </div> 
      <div className='mt-8'>
        <ul className='space-y-4'>
        <li className='flex items-center space-x-2 gap-4 border-gray' >
            <AiFillSetting className='text-2xl' />
            <NavLink to='userconfig' className='text-2xl'>Settings</NavLink>
          </li>
          <li className='flex items-center space-x-2 gap-4'>
            <AiFillRead className='text-2xl' />
            <NavLink to='read' className='text-2xl'>Read</NavLink>
          </li>
          <li className='flex items-center space-x-2 gap-4'>
            <AiFillStar className='text-2xl' />
            <NavLink to='favorites' className='text-2xl'>Favorites</NavLink>
          </li>
          <li className='flex items-center space-x-2 gap-4'>
            <AiFillHeart className='text-2xl' />
            <NavLink to='wish' className='text-2xl'>Wish</NavLink>
          </li>

        </ul>
        
      </div>
    </div>
  )
}

export default SideBar
