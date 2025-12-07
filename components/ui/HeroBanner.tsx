'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/escos/gallery/g7.jpg",
  "/escos/gallery/g2.jpg",
  "/escos/gallery/g3.jpg",
  "/escos/gallery/g4.jpg",
];

const HomeBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
   <section className="relative w-full h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] overflow-hidden flex flex-col justify-center items-center">
  {/* Rotating Images */}
  <AnimatePresence>
    {heroImages.map((src, idx) =>
      idx === currentIndex ? (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={src}
            alt="Escos Banner"
            fill
            className="object-cover object-center brightness-75"
          />
        </motion.div>
      ) : null
    )}
  </AnimatePresence>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Centered Text */}
  <div className="relative z-20 text-center px-6 sm:px-8 lg:px-24 -mt-10">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
      Escos Green – Premium CBD & Wellness
    </h1>
    <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white drop-shadow-md max-w-3xl mx-auto">
      Explore our ethically sourced CBD products, including oils, edibles, and wellness essentials. Crafted with care to enhance your daily lifestyle and support relaxation.
    </p>
  </div>
</section>

  );
};

export default HomeBanner;
