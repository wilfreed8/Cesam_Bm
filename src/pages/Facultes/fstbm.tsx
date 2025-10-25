"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
//import { Select, SelectItem, SelectContent } from "@/components/ui/select";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { mip } from "@/lib/mip";
import { ge_gm } from "@/lib/ge_gm";
import { CoolMode } from "@/components/ui/cool-mode";

//import { type } from "os";
//import { useDeviceType } from "../useDeviceType";

export default function DocuFac() {
  const [search, setSearch] = useState("");
  const [filiere, setfieliere] = useState("mip");
  //const [filiere, setFiliere] = useState("");
  //const [semestre, setSemestre] = useState("");
  const filtered = mip.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );
  const filtered2 = ge_gm.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
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

  const filieres: string[] = ["mip", "ge-gm", "bcg"];
  return (
    <div className="p-4 md:p-10 space-y-6 w-screen bg-base-100 ">
      <ToastContainer />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div className="relative ">
          <div>
            <div>
              <CoolMode>
              <div className="dropdown mb-10  z-10">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn rounded-md bg-green-400 text-white"
                >
                  filieres {filiere}
                  <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-4 w-2 fill-current   animate-bounce ml-1 p-0 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-white/30  backdrop-blur-sm rounded-md z-1 w-52 p-2 shadow-2xl"
                >
                  {filieres.map((element, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                        aria-label={element}
                        onChange={(e) => {
                          setfieliere(e.target.value);
                        }}
                        value={element}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              </CoolMode>
            </div>
          </div>
          <div className="relative ">
            <Search
              className="absolute left-2 top-2.5 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Rechercher un module ou un enseignant..."
              className="pl-8 input input-info  focus:outline-0  outline-0 bg-white "
              list="browsers"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <datalist id="browsers" className="  backdrop-blur-md">
            {filiere == "mip"
              ? mip.map((mod) => {
                  return <option key={mod.id} value={mod.name} className=""></option>;
                })
              : ge_gm.map((mod) => {
                  return <option key={mod.id} value={mod.name}></option>;
                })}
          </datalist>
        </div>
      </section>
      {filtered.length == 0 && (
        <p className="alert ">Aucun element trouvée !</p>
      )}
      {/* section mip*/}

      {filiere == "mip" && (
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((mod) => (
            <motion.div key={mod.id} whileHover={{ scale: 1.02 }} className="">
              <Card className=" border-1 border-slate-100 bg-white shadow-sm ">
                <CardContent className="p-4 space-y-2 ">
                  <h2 className="text-md md:text-lg font-bold">{mod.name}</h2>
                  <div className="flex flex-row justify-between gap-5 md:gap-10 pt-5">
                    <a
                      href={mod.cours}
                      target="_blank"
                      className=" btn-sm text-blue-600  hover:text-green-500  transition-colors duration-200 font-semibold"
                      onClick={handleNotification}
                    >
                      cours
                    </a>
                    <a
                      href={mod.td_examen}
                      target="_blank"
                      className="  hover:text-green-500 text-blue-600 font-semibold transition-colors duration-200"
                      onClick={handleNotification}
                    >
                      td + Examen
                    </a>
                  </div>

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
      )}

      {/* section ge-gm*/}
      {filiere == "ge-gm" && (
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filtered2.map((mod) => (
            <motion.div key={mod.id} whileHover={{ scale: 1.02 }} className="">
              <Card className=" border-1 border-amber-50 bg-white shadow-sm ">
                <CardContent className="p-4 space-y-2 ">
                  <h2 className="text-lg font-bold">{mod.name}</h2>
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
      )}
      {/* section bcg*/}
      {filiere == "bcg" && (
        <div>
          <p className="alert "> pas encore disponible </p>
        </div>
      )}
    </div>
  );
}
