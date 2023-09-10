import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks";

interface SocialLinkProps {
  icon: JSX.Element;
  label: string;
  href: string;
  colorClass: string;
  borderColorClass: string;
}

export default function Contact() {
  const SocialLink: React.FC<SocialLinkProps> = ({
    icon,
    label,
    href,
    colorClass,
    borderColorClass,
  }) => {
    return (
      <Link
        to={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-44 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105 ${colorClass} border-2 ${borderColorClass} transition ease-in`}
      >
        {icon}
        <span className="flex justify-center pb-2 font-bold">{label}</span>
      </Link>
    );
  };

  return (
    <div className="h-full">
      <div className="grid justify-center py-5 md:py-10 lg:py-10 max-w-6xl px-4 sm:px-6 md:px-8 animate__animated animate__fadeInDown overflow-hidden">
        <h1 className="font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8">
          CONTACT
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {SocialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
