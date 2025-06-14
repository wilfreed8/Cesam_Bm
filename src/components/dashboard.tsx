
import clsx from "clsx"
import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

const dashboard = () => {
  const [faculte ,setFaculte]=useState(useLocation().pathname.substring(10,))
  const location = useLocation()
    useEffect(()=>{
      const path = location.pathname.substring(10,)
       setFaculte(path)
    },[location.pathname])
  return (
    <div className="bg-white w-full">
       <div className='w-full flex flex-col pt-10'>
      <div>
      <header className="text-center space-y-2">
        <h1 className="text-3xl md:5xl font-bold animate-fade-up animate-once animate-ease-in-out">DocuFac</h1>
        <p className="text-gray-600 text-xl">
          Téléchargez vos documents universitaires par module
        </p>
      </header>
      </div>
      <div className="w-auto my-5 ml-5   overflow-hidden py-5 pl-5 border-1  rounded-sm border-b-0 border-gray-300 bg-white">
      <h1 className='md:text-2xl uppercase font-bold text-xl mb-2 '>{faculte}</h1>
      <div className='flex flex-row gap-2 '>
      <Link to="/Etudiant/fstbm" className={clsx(
                            "rounded-md btn btn-neutral ",
                            {
                              " bg-blue-500  text-white border-0  ":
                                location.pathname === "/Etudiant/fstbm",
                            }
                          )}>Fst Beni-mellal</Link>     
      <Link to="/Etudiant/ensabm" className={clsx(
                            "rounded-md btn btn-neutral ",
                            {
                              "hover:text-white bg-blue-500  text-white border-0":
                                location.pathname === "/Etudiant/ensabm",
                            }
                          )}>ENSA</Link>
      <Link to="/Etudiant/encgbm" className={clsx(
                            "rounded-md btn btn-neutral ",
                            {
                              "hover:text-white bg-blue-500  text-white border-0":
                                location.pathname === "/Etudiant/encgbm",
                            }
                          )}>ENCG</Link>
      </div>
      </div>
      </div>
      <main>
      <Outlet /> 
      </main>
    </div>
   
  )
}

export default dashboard


