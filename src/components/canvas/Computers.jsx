import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const groupRef = useRef();

  // Gentle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      // move the whole group slightly lower so the model sits more in the middle
      const baseY = isMobile ? -1.0 : -1.2;
      groupRef.current.position.y =
        baseY + Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Strong ambient fill so the entire model is visible */}
      <ambientLight intensity={1.8} />

      {/* Hemisphere light for top/bottom colour separation */}
      <hemisphereLight
        intensity={1.5}
        skyColor="#ffffff"
        groundColor="#444444"
      />

      {/* Key light – bright directional from camera-side */}
      <directionalLight
        position={[10, 15, 15]}
        intensity={2.5}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Fill light from the opposite side so no face is pure black */}
      <directionalLight position={[-10, 10, -5]} intensity={1.2} />

      {/* Accent spot from above-right for highlights */}
      <spotLight
        position={[15, 30, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />

      {/* Back-rim light to separate model from background */}
      <pointLight position={[-15, 5, -15]} intensity={1.5} color="#915eff" />
      <pointLight position={[10, -5, 10]} intensity={0.8} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.75}
        // lower the model a bit so it appears centered in the section
        position={isMobile ? [0, -1.05, 0] : [0, -1.25, 0]}
        rotation={[-0.01, -0.2, -0.05]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 flex items-center justify-center"
      style={{
        pointerEvents: "auto",
        touchAction: "auto",
        height: isMobile ? "60vh" : "100%",
      }}
    >
      <Canvas
        frameloop="always"
        shadows={!isMobile}
        dpr={isMobile ? [1, 1] : [1, 2]}
        camera={{
          // center camera on origin so the model appears in the middle
          position: isMobile ? [0, 1.2, 4] : [0, 1.5, 6],
          fov: isMobile ? 30 : 25,
        }}
        gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
        style={{ touchAction: isMobile ? "auto" : "none" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
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
