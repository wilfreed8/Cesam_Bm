import "./App.css";
import Etudiant from "./pages/Etudiant";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import PhoneNavbar from "./components/phoneNavbar";

function App() {
  return (
    <BrowserRouter>
      <PhoneNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Etudiant" element={<Etudiant />} />
        <Route path="/A propos" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
