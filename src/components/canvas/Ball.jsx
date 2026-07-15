import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React, { Suspense, useEffect, useState } from "react";

const Ball = (props) => {
  const optimizedUrl = `${props.imgUrl}${props.imgUrl.includes("?") ? "&" : "?"}tr=f-auto`;
  const [decal] = useTexture([optimizedUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};


const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    const mqWidth = window.matchMedia("(max-width:640px)");
    const mqTouch = window.matchMedia("(hover: none) and (pointer: coarse)");
    return mqWidth.matches || mqTouch.matches;
  });

  useEffect(() => {
    const mqWidth = window.matchMedia("(max-width:640px)");
    const mqTouch = window.matchMedia("(hover: none) and (pointer: coarse)");
    const handler = () => setIsMobile(mqWidth.matches || mqTouch.matches);

    if (typeof mqWidth.addEventListener === "function") {
      mqWidth.addEventListener("change", handler);
      mqTouch.addEventListener("change", handler);
    } else {
      mqWidth.addListener(handler);
      mqTouch.addListener(handler);
    }

    return () => {
      if (typeof mqWidth.removeEventListener === "function") {
        mqWidth.removeEventListener("change", handler);
        mqTouch.removeEventListener("change", handler);
      } else {
        mqWidth.removeListener(handler);
        mqTouch.removeListener(handler);
      }
    };
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-[#151030] to-[#050816] border border-[#915eff]/20" />
      </div>
    );
  }

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense>
        <OrbitControls enableZoom={false} enableRotate={true} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
