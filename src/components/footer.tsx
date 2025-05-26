import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 w-10 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Bloc Logo / Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-2">CESAM Centrale</h2>
          <p className="text-sm text-gray-300">
            Plateforme d'accompagnement pour les étudiants : tutoriels, ressources et opportunités.
          </p>
        </div>

        {/* Liens de navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Liens rapides</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Accueil</a></li>
            <li><a href="/a-propos" className="hover:underline">À propos</a></li>
            <li><a href="/etudiants" className="hover:underline">Espace Étudiants</a></li>
            <li><a href="/tutoriels" className="hover:underline">Tutoriels</a></li>
          </ul>
        </div>

        {/* Informations de contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><FaEnvelope /> contact@cesamcentrale.org</li>
            <li className="flex items-center gap-2"><FaPhone /> +33 1 23 45 67 89</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 12 Rue des Études, Paris</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="https://twitter.com" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="https://linkedin.com" className="hover:text-blue-500"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CESAM Centrale — Tous droits réservés.
      </div>
    </footer>
  );
}
