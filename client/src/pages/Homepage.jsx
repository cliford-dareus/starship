import React, { forwardRef, useRef } from "react";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import ThreeCanvas from "../components/Canvas";
import useRefs from "react-use-refs";

const Meshe = forwardRef(({ head, stat, expl, ...props }, ref) => {
  return (
    <group>
      <mesh {...props} ref={ref}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </group>
  );
});

function Shape({ ...props }) {
  const scroll = useScroll()
  const [mesh] = useRefs();

  useFrame((state, delta) => {
    const r2 = scroll.range(1 / 4, 1 / 4)

    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      (-width / 7) * r2,
      4,
      delta
    );
  });

  return (
    <group ref={mesh}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Meshe position={[0, 0, 0]} />
    </group>
  );
}

const Homepage = () => {
  return (
    <div className="h-screen relative">
      <Canvas
        orthographic
        camera={{ zoom: 80 }}
        gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
        dpr={[1, 1.5]}
      >
        <ScrollControls pages={5}>
          <Scroll>
            <Shape />
          </Scroll>

          <Scroll html style={{ width: "100%" }}>
            <h1
              style={{
                position: "absolute",
                top: `100vh`,
                right: "20vw",
                fontSize: "15rem",
              }}
            >
              Homepage
            </h1>
            <h1
              style={{
                position: "absolute",
                top: `180vh`,
                right: "20vw",
                fontSize: "15rem",
              }}
            >
              About
            </h1>
            <h1
              style={{
                position: "absolute",
                top: `300vh`,
                right: "20vw",
                fontSize: "15rem",
              }}
            >
              Us
            </h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Homepage;
