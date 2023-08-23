import React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Meshe(props) {
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.z += delta));

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
}

const ThreeCanvas = () => {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Meshe position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
