import { Outlet } from "react-router-dom";
import PhoneNavbar from "../../components/phoneNavbar";
import Footer from "@/components/footer";

const layout = () => {
  return (
    <div >
      <PhoneNavbar />
      <main >
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default layout;
