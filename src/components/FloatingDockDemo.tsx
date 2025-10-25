import { FloatingDock } from "@/components/ui/floating-dock";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export function FloatingDockDemo() {
  const links = [
    {
    title: "Facebook",
    icon: <FaFacebookF className="hover:text-blue-400" />,
    href: "https://www.facebook.com/share/1MSR8UhYGS/",
  },
  {
    title: "Instagram",
    icon: <FaInstagram className="hover:text-blue-300" />, // tu voulais Twitter ici, mais si c'est Instagram : remplace par FaInstagram
    href: "https://www.instagram.com/cesambeni?igsh=MXJpem1pODRxdmV2bg==",
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp className="hover:text-blue-500" />,
    href: "",
  },
  {
    title: "Email",
    icon: <FaEnvelope className="hover:text-blue-500" />,
    href: "mailto:cesam.beni.mellal@gmail.com",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn className="hover:text-blue-500" />,
    href: "https://www.linkedin.com/in/cesam-b%C3%A9ni-mellal-91947434a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
  return (
    <div className="flex items-center justify-center  w-full ">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
