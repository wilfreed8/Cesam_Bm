/* eslint-disable react-hooks/rules-of-hooks */

import clsx from "clsx"
import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Globe } from "./ui/globe"
import { CoolMode } from "./ui/cool-mode"
import { Meteors } from "./ui/meteors"


const dashboard = () => {
  const [faculte ,setFaculte]=useState(useLocation().pathname.substring(10,))
  const location = useLocation()
    useEffect(()=>{
      const path = location.pathname.substring(10,)
       setFaculte(path)
    },[location.pathname])
  return (
    <div className="bg-white w-full">
       <div className='w-full flex flex-col pt-20 md:pt-28'>
        <Meteors number={10}/>
      <div>
      <header className="text-center space-y-2 ">
        <h1 className="text-3xl md:5xl font-bold animate-fade-up animate-once animate-ease-in-out">DocuFac</h1>
        <p className="text-gray-600 text-xl md:text-2xl z-1 text-center absolute md:relative">
          Téléchargez vos documents universitaires par module
        </p>
        <Globe/>
      </header>
      </div>
      <div className="w-auto relative mt-15 md:mt-12 ml-5  z-1 overflow-hidden py-10 pl-5 border-1  rounded-sm border-b-0 border-gray-300 bg-white">
      <h1 className='md:text-2xl uppercase font-bold text-md mb-2 '>{faculte}</h1>
      <div className='flex flex-row gap-2 flex-wrap '>
     <CoolMode> <Link to="/Etudiant/fstbm" className={clsx(
                            "rounded-md btn btn-neutral ",
                            {
                              " bg-blue-500  text-white border-0  ":
                                location.pathname === "/Etudiant/fstbm",
                            }
                          )}>Fst Beni-mellal</Link>  </CoolMode>   
      <CoolMode><Link to="/Etudiant/ensabm" className={clsx(
                            "rounded-md btn btn-neutral ",
                            {
                              "hover:text-white bg-blue-500  text-white border-0":
                                location.pathname === "/Etudiant/ensabm",
                            }
                          )}>ENSA</Link></CoolMode>
      <CoolMode><Link to="/Etudiant/encgbm" className={clsx(
                            "rounded-md btn btn-neutral ",
                            {
                              "hover:text-white bg-blue-500  text-white border-0":
                                location.pathname === "/Etudiant/encgbm",
                            }
                          )}>ENCG</Link></CoolMode>
       <CoolMode> <Link to="/Etudiant/supmtibm" className={clsx(
                            "rounded-md btn btn-neutral ",
                            {
                              "hover:text-white bg-blue-500  text-white border-0":
                                location.pathname === "/Etudiant/supmtibm",
                            }
                          )}>SUPMTI</Link></CoolMode>
      </div>
      </div>
      <div>
      </div>
      </div>
      <main>
      <Outlet /> 
      </main>
    </div>
   
  )
}

export default dashboard


