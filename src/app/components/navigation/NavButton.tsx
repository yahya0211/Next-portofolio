import { Home, User, Palette, Phone, Github, Linkedin, Instagram, FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

const getIcon = (icon: any) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "instagram":
      return <Instagram className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <FileText className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};
const NavButton = ({ xCoordinate, yCoordinate, label, link, icon, newTab }: any) => {
  return (
    <div className="absolute cursor-pointer z-50" style={{ transform: `translate(${xCoordinate}, ${yCoordinate} )` }}>
      <Link href={link} target={newTab ? "_blank" : "_self"} className="text-foreground  rounded-full flex items-center justify-center custom-bg" aria-label={label}>
        <span className="relative w-14 h-14 p-4 text-white  animate-spin-slow-reverse group-hover:pause group-hover:text-accent">
          {getIcon(icon)}
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span className="absolute text-white hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">{label}</span>
        </span>
      </Link>
    </div>
  );
};

export default NavButton;
