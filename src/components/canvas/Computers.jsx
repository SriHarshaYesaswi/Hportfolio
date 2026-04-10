import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <>
      {/* Ambient Lighting for overall illumination */}
      <ambientLight intensity={0.8} />
      
      {/* Hemisphere Light for realistic lighting */}
      <hemisphereLight intensity={1.2} skyColor="#ffffff" groundColor="#000000" />
      
      {/* Directional Light for shadows */}
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Point Lights for accent */}
      <pointLight position={[-10, 20, -5]} intensity={0.8} />
      <pointLight position={[15, -10, 10]} intensity={0.6} />

      {/* Spotlight for emphasis */}
      <spotLight
        position={[20, 30, 20]}
        angle={0.3}
        penumbra={1}
        intensity={1.2}
        castShadow
      />

      {/* Model with Float animation */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8} floatingRange={[-0.5, 0.5]}>
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.6 : 0.9}
          position={isMobile ? [0, -2.5, -1.5] : [0, -3, -1]}
          rotation={isMobile ? [-0.01, -0.2, -0.1] : [-0.01, -0.15, 0]}
        />
      </Float>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div 
      className="w-full h-full"
      style={{ 
        pointerEvents: isMobile ? "none" : "auto", 
        touchAction: isMobile ? "auto" : "none" 
      }}
    >
      <Canvas 
        frameloop="always" 
        shadows={{type: 'PCFShadowMap'}}
        dpr={[1, 2]}
        camera={{ 
          position: isMobile ? [0, 5, 10] : [12, 5, 8], 
          fov: isMobile ? 50 : 45,
          near: 0.1,
          far: 1000
        }} 
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          precision: "highp"
        }}
        style={{ touchAction: isMobile ? "auto" : "none" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false} 
            enableRotate={!isMobile} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={2} 
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            target={[0, 0, 0]}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
