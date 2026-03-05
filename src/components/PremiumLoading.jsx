import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PremiumLoading({ navigateAfter = true, timeout = 4000, onDone }) {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState("logo"); // "logo" then "text"
  const navigate = useNavigate();

  useEffect(() => {
    // 1st phase: logo zoom in. After 1.3s, switch to text phase.
    const textTimer = setTimeout(() => {
      setPhase("text");
    }, 1300);

    // End of loading animation
    const exitTimer = setTimeout(() => {
      setShow(false);
    }, timeout + 1400); // 5400

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, [timeout]);

  useEffect(() => {
    if (!show) {
      if (navigateAfter) {
        const navTimer = setTimeout(() => navigate("/home"), 650);
        return () => clearTimeout(navTimer);
      }
      if (onDone) {
        onDone();
      }
    }
  }, [show, navigateAfter, navigate, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="premium-loading"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
          style={{ backgroundColor: "#000000" }}
        >
          {/* subtle radial glow backdrop */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(139,92,246,0.16) 0%, rgba(109,40,217,0.06) 28%, transparent 55%)",
              mixBlendMode: "screen",
            }}
          />

          <motion.div
            layout
            className="relative flex flex-col md:flex-row items-center justify-center gap-6 px-6 max-w-full"
          >
            {/* Logo Container */}
            <motion.div
              layout
              className="relative flex items-center justify-center"
            >
              {/* animated purple glow behind the logo */}
              <motion.div
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.05, 0.95], opacity: [0, 0.28, 0.18], transition: { duration: 2.8, ease: "easeInOut" } }}
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: 9999,
                  background: "radial-gradient(circle, rgba(139,92,246,0.28), rgba(109,40,217,0.12) 40%, transparent 70%)",
                  filter: "blur(24px)",
                  position: "absolute",
                  zIndex: -1,
                }}
              />

              {/* Expanding violet circle ring from the logo */}
              <motion.div
                layout
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 3.5, opacity: [0, 0.8, 0] }}
                transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: 9999,
                  border: "2px solid #8B5CF6", // Violet
                  position: "absolute",
                  zIndex: -2,
                }}
              />

              <motion.img
                layout
                src="/SH2-removebg-preview.png"
                alt="SH logo"
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  layout: { duration: 0.8, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05, filter: "drop-shadow(0px 0px 15px rgba(145, 94, 255, 0.6))" }}
                style={{ filter: "drop-shadow(0 18px 48px rgba(139,92,246,0.42))" }}
              />
            </motion.div>

            {/* Text Container */}
            <AnimatePresence>
              {phase === "text" && (
                <motion.div
                  layout
                  initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: "easeOut" }
                  }}
                  exit={{ opacity: 0, x: -20 }}
                  className="mt-4 md:mt-0 text-center md:text-left overflow-hidden flex flex-col justify-center"
                >
                  <motion.h1
                    className="text-transparent bg-clip-text text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight whitespace-nowrap"
                    style={{
                      fontFamily: '"AvantGarde Md BT", "Avant Garde", "Century Gothic", sans-serif',
                      fontFeatureSettings: '"kern" 1',
                      backgroundImage: "linear-gradient(110deg, #ffffff 40%, #8B5CF6 50%, #8B5CF6 52%, #ffffff 62%)",
                      backgroundSize: "250% 100%",
                      WebkitBackgroundClip: "text",
                    }}
                    initial={{ backgroundPosition: "150% center" }}
                    animate={{ backgroundPosition: "-150% center" }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.5
                    }}
                  >
                    Welcome to my world
                  </motion.h1>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
