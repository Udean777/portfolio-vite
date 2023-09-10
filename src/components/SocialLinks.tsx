import {
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialLinks = [
  {
    icon: <FaGithub className="m-auto w-auto py-5" size={150} />,
    label: "GitHub",
    href: "https://github.com/Udean777",
    colorClass: "text-purple-600",
    borderColorClass: "border-purple-600",
  },
  {
    icon: <FaInstagram className="m-auto w-auto py-5" size={150} />,
    label: "Instagram",
    href: "https://www.instagram.com/ssajudn/",
    colorClass: "text-orange-600",
    borderColorClass: "border-orange-600",
  },
  {
    icon: <FaLinkedinIn className="m-auto w-auto py-5" size={150} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sajudin-ma-ruf-b9ba01265/",
    colorClass: "text-blue-600",
    borderColorClass: "border-blue-600",
  },
  {
    icon: <FaWhatsapp className="m-auto w-auto py-5" size={150} />,
    label: "WhatsApp",
    href: "https://wa.me/6285174363671",
    colorClass: "text-green-600",
    borderColorClass: "border-green-600",
  },
];

export default SocialLinks;
