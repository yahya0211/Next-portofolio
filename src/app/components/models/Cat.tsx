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

export default function CatModel(props: any) {
  const { nodes, materials } = useGLTF("/Models/wizard_cat(1).glb") as unknown as GLTFResult;
  const modelRef = useRef<THREE.Object3D>(null!);
  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime) * 0.5;
  });
  return (
    <group {...props} dispose={null} position={[0, 0, 0]} scale={[0.2, 0.2, 0.3]} rotation={[0, -0.1, 0]} ref={modelRef}>
      <group name="6e34e696455945f1bf4b00cc08f4f062fbx" scale={0.04}>
        <mesh
          name="shev_����������������008_0"
          castShadow
          receiveShadow
          geometry={nodes["shev_����������������008_0"].geometry}
          material={materials[".008"]}
          position={[-57.844, -236.976, -39.264]}
          rotation={[-1.571, 0.009, -0.65]}
          scale={49.461}
        />
        <mesh
          name="pop_LP_����������������008_0"
          castShadow
          receiveShadow
          geometry={nodes["pop_LP_����������������008_0"].geometry}
          material={materials[".008"]}
          position={[-42.895, -93.481, -31.656]}
          rotation={[-1.571, 0.009, -0.65]}
          scale={[49.46, 49.461, 49.461]}
        />
        <mesh
          name="zash_LP_����������������008_0"
          castShadow
          receiveShadow
          geometry={nodes["zash_LP_����������������008_0"].geometry}
          material={materials[".008"]}
          position={[40.515, 96.755, -42.222]}
          rotation={[-1.571, 0.009, -0.65]}
          scale={49.461}
        />
        <mesh
          name="Torus_����������������008_0"
          castShadow
          receiveShadow
          geometry={nodes["Torus_����������������008_0"].geometry}
          material={materials[".008"]}
          position={[111.31, 94.806, -61.304]}
          rotation={[-1.571, 0.009, -0.65]}
          scale={49.461}
        />
        <mesh
          name="cat_LP_����������������010_0"
          castShadow
          receiveShadow
          geometry={nodes["cat_LP_����������������010_0"].geometry}
          material={materials[".010"]}
          position={[-45.393, -21.295, -53.153]}
          rotation={[-1.571, 0.009, -0.65]}
          scale={68.321}
        />
        <mesh
          name="hat_LP_����������������008_0"
          castShadow
          receiveShadow
          geometry={nodes["hat_LP_����������������008_0"].geometry}
          material={materials[".008"]}
          position={[-57.844, -236.976, -39.264]}
          rotation={[-1.571, 0.009, -0.65]}
          scale={49.461}
        />
        <mesh
          name="eye_����������������008_0"
          castShadow
          receiveShadow
          geometry={nodes["eye_����������������008_0"].geometry}
          material={materials[".008"]}
          position={[-30.982, -9.888, -26.2]}
          rotation={[-0.165, -0.143, -0.051]}
          scale={26.991}
        />
        <mesh
          name="pop_LP002_����������������008_0"
          castShadow
          receiveShadow
          geometry={nodes["pop_LP002_����������������008_0"].geometry}
          material={materials[".008"]}
          position={[106.274, 63.598, -28.133]}
          rotation={[-1.571, 0.009, -0.65]}
          scale={[49.46, 49.461, 49.461]}
        />
        <mesh
          name="��������������_����������������008_0"
          castShadow
          receiveShadow
          geometry={nodes["��������������_����������������008_0"].geometry}
          material={materials[".008"]}
          position={[-73.527, -60.132, -5.485]}
          rotation={[0.012, 0.921, -1.585]}
          scale={3.563}
        />
        <mesh
          name="eye002_����������������008_0"
          castShadow
          receiveShadow
          geometry={nodes["eye002_����������������008_0"].geometry}
          material={materials[".008"]}
          position={[-75.118, -9.501, -59.754]}
          rotation={[-0.202, -0.608, -0.053]}
          scale={26.991}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Models/wizard_cat(1).glb");
