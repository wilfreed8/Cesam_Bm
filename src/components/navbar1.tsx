'use client';
import React, { useState } from 'react'
import Logo from './ui/logo'
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';
import { List, X } from 'lucide-react';
import { useDeviceType } from '@/useDeviceType';
const Navbar1 = () => {
  const location =  useLocation();
  const [isMenuOpen,setisMenuOpen] = useState(false);
  const Device = useDeviceType();
  const handleMenu  = () => {
    setisMenuOpen(!isMenuOpen);
  }
  return (
    <>
    <div className="flex items-center sticky top-0 z-10 bg-white justify-between px-2 py-3 pl-1 md:pl-8 border-b-2 shadow-blue-150 md:p-3 shadow-sm ">
      <Logo/>
      <div className="flex item-center absolute md:relative right-20 top-0  justify-between  md:mr-0">
      
      <button className={clsx('md:hidden absolute top-3 z-10 left-7 md:relative ',{
        'left-12 bg-red-600 ' : isMenuOpen} )} onClick={handleMenu}>
      { isMenuOpen ? <X/> :<List/> }
      </button>
     
        {isMenuOpen && Device=='mobile'  &&
        <ul className='flex flex-col  bg-gray-50 px-2  z-5  pt-10 pb-2  left-[-96px] md:relative md:flex-row absolute  items-center justify-end  list-none font-bold cursor-pointer gap-3 md:gap-30 '>
        <Link
  to="/Home"
  className={clsx(
    "btn btn-ghost btn-info w-40 md:w-auto p-1  md:p-4 font-bold md:text-xl text-sm rounded-0 md:rounded-2xl ",
    { "hover:text-white bg-blue-800 text-white": location.pathname === "/Home" }
  )}
>
  Home
</Link>

<Link
  to="/Etudiant"
  className={clsx(
    "btn btn-ghost btn-primary w-40 md:w-auto  p-1 md:p-4 font-bold md:text-xl text-sm rounded-0 md:rounded-2xl",
    { "hover:text-white bg-blue-800 text-white": location.pathname === "/Etudiant" }
  )}
>
  Etudiant
</Link>

<Link
  to="/A propos"
  className={clsx(
    "btn btn-ghost btn-primary w-40 md:w-auto p-1 md:p-4 font-bold md:text-xl text-sm rounded-0 md:rounded-2xl",
    { "hover:text-white bg-blue-800 text-white py-0": location.pathname === "/A_propos" }
  )}
>
  A propos
</Link>

<Link
  to="/Tutoriels"
  className={clsx(
    "btn btn-ghost btn-primary w-40 md:w-auto p-1 md:p-4 font-bold md:text-xl text-sm rounded-0 md:rounded-2xl",
    { "hover:text-white bg-blue-800 text-white": location.pathname === "/tutoriels" }
  )}
>
  Tutoriels
</Link>
          </ul>
         } 
         { Device != 'mobile' && <ul className='flex   flex-row   items-center justify-end  list-none font-bold cursor-pointer  gap-10 '>
          <Link
    to="/Home"
    className={clsx(
      "btn btn-ghost btn-primary w-40 md:w-auto p-1  md:p-4 font-bold md:text-xl text-sm rounded-0 md:rounded-2xl",
      { "hover:text-white bg-blue-800 text-white": location.pathname === "/Home" }
    )}
  >
    Home
  </Link>
  
  <Link
    to="/Etudiant"
    className={clsx(
      "btn btn-ghost btn-primary w-40 md:w-auto  p-1 md:p-4 font-bold md:text-xl text-sm rounded-0 md:rounded-2xl",
      { "hover:text-white bg-blue-800 text-white": location.pathname === "/Etudiant" }
    )}
  >
    Etudiant
  </Link>
  
  <Link
    to="/A propos"
    className={clsx(
      "btn btn-ghost btn-primary w-40 md:w-auto p-1 md:p-4 font-bold md:text-xl text-sm rounded-0 md:rounded-2xl",
      { "hover:text-white bg-blue-800 text-white py-0": location.pathname === "/A%propos" }
    )}
  >
    A propos
  </Link>
  
  <Link
    to="/Tutoriels"
    className={clsx(
      "btn btn-ghost btn-primary w-40 md:w-auto p-1 md:p-4 font-bold md:text-xl text-sm rounded-0 md:rounded-2xl",
      { "hover:text-white bg-blue-800 text-white": location.pathname === "/tutoriels" }
    )}
  >
    Tutoriels
  </Link>
            </ul>}
      </div>
    </div>
    </>
  )
}

export default Navbar1
