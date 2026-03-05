import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center overflow-hidden z-10">
            <div className="flex flex-col items-center justify-center z-10 w-full px-5">

                {/* Animated Logo Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, filter: "drop-shadow(0px 0px 15px rgba(145, 94, 255, 0.6))" }}
                    className="relative flex items-center justify-center cursor-pointer mb-8"
                >
                    {/* Subtle Background Glow under logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute w-40 h-40 md:w-56 md:h-56 bg-[#915eff] rounded-full blur-[60px] md:blur-[80px] -z-10"
                    />

                    <img
                        src="/SH2-removebg-preview.png"
                        alt="SH Logo"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
                    />
                </motion.div>

                {/* Welcome Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide">
                        Welcome
                    </h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                        className="mt-4 h-1 w-24 sm:w-32 mx-auto rounded-full origin-center"
                        style={{ backgroundImage: "linear-gradient(to right, #8B5CF6, #6D28D9)" }}
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
