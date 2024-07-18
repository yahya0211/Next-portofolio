"use client";
import Image from "next/image";
import bg from "../../../../public/Background/about-background.png";
import RenderModel from "../../components/RenderModel";
import { HatModel } from "../../components/models/Hat";
import AboutDetails from "../../components/about";

export default function About() {
  return (
    <>
      <Image src={bg} alt="background-image" className="w-full fixed top-0 left-0 h-full object-cover object-center -z-50 opacity-80" />
      <div className="w-full h-screen absolute top-1/2  -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1 -translate-x-1/2">
          <h1 className="font-bold text-7xl text-accent w-full text-yellow-400">Yahya Agung</h1>
          <p className="font-light text-foreground text-white text-2xl">Meet the wizard behind this portofolio</p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
