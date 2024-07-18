"use client";
import React from "react";
import { BtnList } from "../../data";
import NavButton from "./NavButton";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-center hover:pause relative animate-spin-slow group">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radiusCircle = "calc(20vw - 1rem)";
          const xCoordinate = `calc(${radiusCircle} * ${Math.cos(angleRad)})`;
          const yCoordinate = `calc(${radiusCircle} * ${Math.sin(angleRad)})`;

          return <NavButton key={btn.label} xCoordinate={xCoordinate} yCoordinate={yCoordinate} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
