import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Load the original desktop PC GLTF model
  const computer = useGLTF("/desktop_pc/scene.gltf");

  // Center any geometries so the model pivots around its center
  useEffect(() => {
    if (!computer || !computer.scene) return;
    computer.scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        try {
          child.geometry.center();
        } catch (e) {
          // ignore geometry center errors for non-BufferGeometry
        }
      }
    });
  }, [computer]);

  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5} floatingRange={[0, 0]}>
        <primitive
          object={computer.scene}
          // original desktop model transform
          scale={isMobile ? 0.6 : 0.85}
          position={isMobile ? [0, -1.8, -1.0] : [0, -3.2, -1.2]}
          rotation={isMobile ? [0, 0, -0.02] : [-0.01, -0.15, -0.02]}
        />
      </Float>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:640px)");
    // set initial value
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas frameloop="always" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
