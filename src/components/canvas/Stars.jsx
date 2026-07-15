import React from "react";
import { useRef, useState, useEffect, Suspense } from "react";
import { PointMaterial, Preload, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    const mqWidth = window.matchMedia("(max-width:768px)");
    const mqTouch = window.matchMedia("(hover: none) and (pointer: coarse)");
    return mqWidth.matches || mqTouch.matches;
  });

  useEffect(() => {
    const mqWidth = window.matchMedia("(max-width:768px)");
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
    return <div className="w-full h-full absolute inset-0 z-[-1] bg-gradient-to-b from-transparent to-[#050816]/50" />;
  }

  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
