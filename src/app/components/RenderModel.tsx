"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }: any) => {
  return (
    <Canvas className={clsx("absolute inset-0", className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="park" />
    </Canvas>
  );
};

export default RenderModel;
