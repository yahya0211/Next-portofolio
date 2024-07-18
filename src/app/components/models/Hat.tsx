"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

type GLTFResult = {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

export function HatModel(props: any) {
  const { nodes, materials } = useGLTF("/Models/hat-transformed.glb") as unknown as GLTFResult;
  const modelRef = useRef<THREE.Object3D>(null!);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate around Y-axis
    }
  });

  // Cast nodes.Object_2 to THREE.Mesh
  const object2 = nodes.Object_2 as THREE.Mesh;

  return (
    <group {...props} dispose={null} ref={modelRef} scale={[1.8, 1.8, 1.8]} position={[0, 0, 0]} rotation={[0.4, -1, 0]}>
      <mesh castShadow receiveShadow geometry={object2.geometry} material={materials.initialShadingGroup} position={[0, -3.867, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

useGLTF.preload("/Models/hat-transformed.glb");
