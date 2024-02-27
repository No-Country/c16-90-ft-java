import React from 'react'
import { AiFillRead, AiFillStar, AiFillHeart, AiFillSetting} from "react-icons/ai";
import { NavLink,} from "react-router-dom";
import Profile from './Profile';

const SideBar = ({ onNavLinkClick }) => {
  const handleNavLinkClick = () => {
    // Llama a la función de actualización proporcionada por UserPage
    onNavLinkClick();
  };
  return (
    <div className="w-1/4 h-screen  p-4 border-r-1 bg-boxdark-2 text-white">
      <div className='flex items-center justify-center'>
        <Profile/>    
      </div> 
      <div className='mt-8'>
        <ul className='space-y-4'>
        
          <li className='flex items-center space-x-2 gap-4'>
            <AiFillRead className='text-2xl' />
            <NavLink to='read' className='text-2xl' onClick={handleNavLinkClick}>Read</NavLink>
          </li>
          <li className='flex items-center space-x-2 gap-4'>
            <AiFillStar className='text-2xl' />
            <NavLink to='favorites' className='text-2xl' onClick={handleNavLinkClick}>Favorites</NavLink>
          </li>
          <li className='flex items-center space-x-2 gap-4'>
            <AiFillHeart className='text-2xl' />
            <NavLink to='wish' className='text-2xl' onClick={handleNavLinkClick}>Wish</NavLink>
          </li>

        </ul>
        
      </div>
    </div>
  )
}

export default SideBar
