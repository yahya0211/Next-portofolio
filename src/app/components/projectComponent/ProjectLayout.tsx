import Link from "next/link";
import React from "react";

interface ProjectLayoutProps {
  name: string;
  description: string;
  date: string;
  link: string; // Assuming link is optional
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ name, description, date, link }) => {
  return (
    <Link href={link} target="_blank" className=" flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 mt-5 custom-bg">
      <div className="flex items-center justify-center space-x-2 ">
        <h2 className="text-foreground text-white">{name}</h2>
        <p className=" text-gray-400">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-white">{new Date(date).toDateString()}</p>
    </Link>
  );
};

export default ProjectLayout;
