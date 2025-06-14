import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import PhoneNavbar from "./components/phoneNavbar";
import Dashboard from "./components/dashboard";
import Fstbm from "./pages/Facultes/fstbm";
import Ensabm from "./pages/Facultes/ensabm";
import Encgbm from "./pages/Facultes/encgbm";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <PhoneNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Etudiant" element={<Dashboard />} >
        <Route path="/Etudiant/fstbm" element={<Fstbm />} />
        <Route path="/Etudiant/ensabm" element={<Ensabm />} />
        <Route path="/Etudiant/encgbm" element={<Encgbm />} />
        </Route>
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
