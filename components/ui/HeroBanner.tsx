"use client";

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
    }, 4000); // rotate every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden flex items-center justify-center">
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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 lg:px-24 z-20 space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Escos Green – Premium CBD & Wellness
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-md max-w-2xl">
          Explore our ethically sourced CBD products, including oils, edibles, and wellness essentials. Crafted with care to enhance your daily lifestyle and support relaxation.
        </p>
        <a
          href="/faq"
          className="mt-4 px-6 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-orange-500 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HomeBanner;
