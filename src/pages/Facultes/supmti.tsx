"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
//import { Select, SelectItem, SelectContent } from "@/components/ui/select";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { supmti } from "@/lib/supmti";
//import { type } from "os";
//import { useDeviceType } from "../useDeviceType";

export default function DocuFac() {

  const [search, setSearch] = useState("");

  //const [filiere, setFiliere] = useState("");
  //const [semestre, setSemestre] = useState("");
  const filtered = supmti.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.ecole.toLowerCase().includes(search.toLowerCase())
  );
  const handleNotification = () => {
    toast("Votre Telechargements est en cours !", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
      theme: "light",
      transition: Bounce,
    });
  };
  const [semestre, setSemestre] = useState("Semestre 1")
  const semestres: string[] = ["Semestre 1", "Semestre 2"];

  return (
    <div className="p-4 md:p-10 space-y-6 w-screen bg-white">
      <ToastContainer />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <div className="dropdown mb-10 ">
            <div
              tabIndex={0}
              role="button"
              className="btn rounded-md bg-green-400 text-white"
            >
              {semestre}
              <svg
                width="12px"
                height="12px"
                className="inline-block h-4 w-2 fill-current animate-bounce ml-1 p-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content  bg-white/30  backdrop-blur-sm rounded-md z-1 w-52 p-2 shadow-2xl"
            >
              {semestres.map((element, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                    aria-label={element}
                    onChange={(e) => {
                      setSemestre(e.target.value);
                    }}
                    value={element}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 text-gray-400" size={18} />
          <Input
            placeholder="Rechercher un module ou un enseignant..."
            className="pl-8 input input-info  focus:outline-0  outline-0"
            list="browsers"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <datalist id="browsers">
            {supmti
  .filter((mod) => mod.semestre === semestre) // <- ici tu filtres par semestre
  .map((mod) => {
              return <option key={mod.id} value={mod.name}></option>;
            })}
          </datalist>
        </div>
      </section>
      {supmti
  .filter((mod) => mod.semestre === semestre).length  == 0 && (
        <p className="alert ">Aucun element trouvée !</p>
      )}
    
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filtered
            .filter((mod) => mod.semestre === semestre) // <- ici tu filtres par semestre
            .map((mod) => (
              <motion.div
                key={mod.id}
                whileHover={{ scale: 1.02 }}
                className=""
              >
                <Card className=" border-1 border-slate-100  shadow-sm ">
                  <CardContent className="p-4 space-y-2 ">
                    <h2 className="text-lg font-bold text-center">
                      {mod.name}
                    </h2>
                    <div className="flex flex-row gap-10 pt-5"></div>

                    <a
                      href={mod.lien}
                      target="_blank"
                      className="w-full mt-2 btn border-amber border-1 rounded-md text-green-400 bg-white font-bold  hover:text-white hover:bg-green-400 transition-colors duration-200"
                      onClick={handleNotification}
                    >
                      Télécharger
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </section>
    </div>
  );
}
