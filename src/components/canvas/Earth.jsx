import React, { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF('./planet/scene.gltf');

  useEffect(() => {
    earth.scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry?.center();
      }
    });
  }, [earth]);

  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <primitive object={earth.scene} scale={isMobile ? 1.5 : 2.0} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const EarthCanvas = ({ isMobile: propIsMobile } = {}) => {
  const [isMobileState, setIsMobileState] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    const mqWidth = window.matchMedia("(max-width:640px)");
    const mqTouch = window.matchMedia("(hover: none) and (pointer: coarse)");
    return mqWidth.matches || mqTouch.matches;
  });

  useEffect(() => {
    if (typeof propIsMobile === "boolean") return;
    const mqWidth = window.matchMedia("(max-width:640px)");
    const mqTouch = window.matchMedia("(hover: none) and (pointer: coarse)");
    const handler = () => setIsMobileState(mqWidth.matches || mqTouch.matches);

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
  }, [propIsMobile]);

  const isMobile = typeof propIsMobile === "boolean" ? propIsMobile : isMobileState;

  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-36 h-36 rounded-xl bg-gradient-to-r from-[#151030] to-[#050816] border border-[#915eff]/20" />
      </div>
    );
  }

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 300, }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          enableRotate={!isMobile}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
