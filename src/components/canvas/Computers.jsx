import React, { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const groupRef = useRef();
  const centeredRef = useRef(false);

  // center the model using its bounding box once loaded
  useEffect(() => {
    if (computer && computer.scene && !centeredRef.current) {
      try {
        const bbox = new THREE.Box3().setFromObject(computer.scene);
        const center = bbox.getCenter(new THREE.Vector3());
        computer.scene.position.x -= center.x;
        computer.scene.position.y -= center.y;
        computer.scene.position.z -= center.z;
        centeredRef.current = true;
      } catch (e) {
        console.warn("Could not center model:", e);
      }
    }
  }, [computer]);

  // Removed gentle floating animation as per user request

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

      {computer && computer.scene && (
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.15 : 0.2}
          position={isMobile ? [0, -1.3, 0.1] : [1, -0.65, -0.2]}
          rotation={isMobile ? [0, -0.5, -0.08] : [0.01, -0.3, -0.08]}
        />
      )}
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
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handler);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handler);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handler);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 w-full h-full"
      style={{
        pointerEvents: "auto",
        touchAction: "auto",
      }}
    >
      <Canvas
        frameloop="always"
        shadows={!isMobile}
        dpr={isMobile ? [1, 1] : [1, 2]}
        camera={{
          position: isMobile ? [0, 0, 6] : [0, 1.6, 5.5],
          fov: isMobile ? 30 : 25,
        }}
        gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance", alpha: true }}
        style={{ touchAction: isMobile ? "auto" : "none" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enableRotate={!isMobile}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        {!isMobile && <Preload all />}
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
