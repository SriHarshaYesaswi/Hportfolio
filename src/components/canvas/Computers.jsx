import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Load the original desktop PC GLTF model
  const computer = useGLTF("/desktop_pc/scene.gltf");



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
          scale={isMobile ? 0.5 : 0.85}
          position={isMobile ? [0, -3, -1.5] : [0, -3.2, -1.2]}
          rotation={isMobile ? [-0.01, -0.2, -0.1] : [-0.01, -0.15, -0.02]}
        />
      </Float>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false
  );

  useEffect(() => {
    // Increase breakpoint to 768px to cover tablets and larger mobile emulations
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    
    // We already initialized it above, but ensure it's up to date
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
        shadows 
        camera={{ position: [20, 3, 5], fov: 25 }} 
        gl={{ preserveDrawingBuffer: true }}
        style={{ touchAction: isMobile ? "auto" : "none" }} // override R3F default touch-action: none
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false} 
            enableRotate={!isMobile} 
            enablePan={!isMobile} 
            autoRotate 
            autoRotateSpeed={1} 
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 2} 
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
