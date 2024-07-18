"use client";
import Image from "next/image";
import bg from "../../../../public/Background/projects-background.png";
import ProjectList from "../../components/projectComponent";
import { projectsData } from "../../data";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="w-full  fixed top-0 left-0 h-full object-cover object-center -z-50 opacity-80" />
      <ProjectList projects={projectsData} />
    </>
  );
}
