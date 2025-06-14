import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { TfiEmail  } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-screen text-gray-800  border-blue px-6 py-10 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Bloc Logo / Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">CESAM Beni-Mellal</h2>
          <p className="text-sm text-gray-800">
            Plateforme d'accompagnement pour les étudiants : Documents, ressources et opportunités.
          </p>
        </div>

        {/* Liens de navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Liens rapides</h3>
          <ul className="space-y-1 text-sm text-gray-800">
            <li><Link to="/Home" className="hover:underline hover:text-green-400">Accueil</Link></li>
            <li><Link to="/About" className="hover:underline hover:text-green-400">À propos</Link></li>
            <li><Link to="/Etudiant/fstbm" className="hover:underline hover:text-green-400">Espace Étudiants</Link></li>
          </ul>
        </div>

        {/* Informations de contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-800 ">
            <a href="mailto:cesam.beni.mellal@gmail.com" className="hover:text-blue-500 flex flex-row gap-2 "><TfiEmail />cesam.beni.mellal@gmail.com</a>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/share/1MSR8UhYGS/" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="https://www.instagram.com/cesambeni?igsh=MXJpem1pODRxdmV2bg==" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="" className="hover:text-blue-500 "><FaWhatsapp /></a>
            <a href="mailto:cesam.beni.mellal@gmail.com" className="hover:text-blue-500"><TfiEmail /></a>
            <a href="https://www.linkedin.com/in/cesam-b%C3%A9ni-mellal-91947434a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-500"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2025-{new Date().getFullYear()} CESAM Beni-mellal — Tous droits réservés.
      </div>
    </footer>
  );
}
