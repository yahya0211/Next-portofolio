import React from "react";
import ProjectLayout from "./ProjectLayout";

interface Project {
  id: number;
  name: string;
  date: string;
  description: string;
  link: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="w-full max-w-4xl px-16 space-y-6 flex flex-col items-centers">
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;
