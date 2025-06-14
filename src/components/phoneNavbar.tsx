import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import Logo from "./ui/logo";

const phoneNavbar = () => {


  let location = useLocation();

  const closeDrawer = () => {
    const drawer = document.getElementById("my-drawer-3") as HTMLInputElement;
    if (drawer) drawer.checked = false;
  };

  return (
    <div className=" w-screen backdrop-blur-lg sticky top-0 z-50">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-white/30  backdrop-blur-md w-full md:15 shadow-md md:h-18">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex md:flex-row justify-between w-full">
              <Logo />
              <div className="hidden flex-none lg:block">
                <div className="flex justify-between flex-col md:flex-row w-full">
                  <ul className="menu menu-horizontal flex just">
                    {/* Navbar menu content here */}
                    <div className="menu menu-horizontal md:mr-70 gap-10">
                      <li>
                        <Link
                          to="/Home"
                          className={clsx(
                            "btn btn-ghost btn-info w-40 md:w-auto p-1  md:p-4 font-bold md:text-xl text-sm rounded-0 md:rounded-lg hover:text-white transition-colors duration-200",
                            {
                              "hover:text-white bg-blue-800  text-white":
                                location.pathname === "/Home",
                            }
                          )}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Etudiant/fstbm"
                          className={clsx(
                            "btn btn-ghost btn-info w-40 md:w-auto  p-1 md:p-4 font-bold hover:text-white md:text-xl text-sm rounded-0 md:rounded-lg transition-colors duration-200",
                            {
                              "hover:text-white bg-blue-800 text-white":
                              location.pathname.includes("/Etudiant"),
                            }
                          )}
                        >
                          Etudiant
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/About"
                          className={clsx(
                            "btn btn-ghost btn-info w-40 md:w-auto p-1 md:p-4 font-bold md:text-xl hover:text-white text-sm rounded-0 md:rounded-lg transition-colors duration-200",
                            {
                              "hover:text-white bg-blue-800 text-white ":
                                location.pathname === "/About",
                            }
                          )}
                        >
                          A propos
                        </Link>
                      </li>
                    </div>
                    <div>
                      <div className="flex flex-col items-center md:flex-row gap-1 "></div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  bg-white  min-h-full w-80 items-center gap-2 p-4">
            {/* Sidebar content here */}

            <div className="mt-2">
              <p className="font-semibold text-sm ">
                Bienvenue sur CesamDoc
              </p>
            </div>
            <li className="w-full ">
              <Link
                to="/Home"
                onClick={closeDrawer}
                className={clsx(
                  "btn btn-soft rounded-md btn-info w-full hover:text-white transition-colors duration-200  p-1   font-semibold  text-sm ",
                  {
                    "hover:text-white bg-blue-800 btn-primary text-white":
                      location.pathname === "/Home",
                  }
                )}
              >
                Home
              </Link>
            </li>

            <li className="w-full">
              <Link
                to="/Etudiant/fstbm"
                onClick={closeDrawer}
                className={clsx(
                  "btn btn-soft btn-info  rounded-md w-full hover:text-white transition-colors duration-200  p-1   font-semibold  text-sm",
                  {
                    "hover:text-white bg-blue-800  btn-primary text-white":
                      location.pathname.includes("/Etudiant") ,
                  }
                )}
              >
                Etudiant
              </Link>
            </li>

            <li className="w-full mb-10">
              <Link
                to="/About"
                onClick={closeDrawer}
                className={clsx(
                  "btn btn-soft btn-info  rounded-md w-full hover:text-white transition-colors duration-200  p-1   font-semibold  text-sm",
                  {
                    "hover:text-white bg-blue-800  btn-primary text-white py-0":
                      location.pathname === "/About",
                  }
                )}
              >
                A propos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default phoneNavbar;
