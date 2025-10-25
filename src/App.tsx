import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import PhoneNavbar from "./components/phoneNavbar";
import Dashboard from "./components/dashboard";
import Fstbm from "./pages/Facultes/fstbm";
import Ensabm from "./pages/Facultes/ensabm";
import Encgbm from "./pages/Facultes/encgbm";
import Footer from "./components/footer";
import Supmti from "./pages/Facultes/supmti";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <PhoneNavbar />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/Home" element={<Hero />} />
        <Route path="/Etudiant" element={<Dashboard />} >
        <Route path="/Etudiant/fstbm" element={<Fstbm />} />
        <Route path="/Etudiant/ensabm" element={<Ensabm />} />
        <Route path="/Etudiant/encgbm" element={<Encgbm />} />
        <Route path="/Etudiant/supmtibm" element={<Supmti />} />
        </Route>
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
