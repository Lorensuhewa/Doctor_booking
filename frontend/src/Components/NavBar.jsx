import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Profile_img from '../assets/profile_pic.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const NavBar = () => {

    const Navigate = useNavigate();

   // const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <button onClick={()=> {Navigate('/')}} className='mb-5 font-bold text-xl' >DOC App</button>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to ='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/Doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/About'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/Contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={Profile_img} alt=' '/>
            <ArrowDropDownIcon />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>Navigate('my-profile')} className='hover text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>Navigate('my-appointment')} className='hover text-black cursor-pointer'>My Appointment</p>
                <p onClick={()=> setToken(false)}   className='hover text-black cursor-pointer'>Logout</p>
              </div>
            </div>

            
          </div>
          :<button onClick={()=>Navigate('/Login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
      </div>
    </div>
  )
}

export default NavBar
