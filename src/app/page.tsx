"use client";
import Image from "next/image";
import bg from "../../public/Background/home-background.png";
import RenderModel from "./components/RenderModel";
import CatModel from "./components/models/Cat";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center z-100 opacity-90 overflow-hidden" />
      <div className="absolute inset-0 z-10">
        <Navigation />
      </div>
      <div className="absolute inset-0 ">
        <RenderModel>
          <CatModel />
        </RenderModel>
      </div>
    </main>
  );
}
