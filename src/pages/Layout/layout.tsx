import React from "react";
import { Outlet } from "react-router-dom";
import PhoneNavbar from "../../components/phoneNavbar";
import Footer from "@/components/footer";

const layout = () => {
  return (
    <>
      <PhoneNavbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default layout;
