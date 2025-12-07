"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/escos/gallery/g2.jpg",
  "/escos/gallery/g3.jpg",
  "/escos/gallery/g4.jpg",
  "/escos/gallery/g5.jpg",
  "/escos/gallery/g6.jpg",
  "/escos/gallery/g7.jpg",
  "/escos/gallery/g8.jpg",
  "/escos/gallery/g9.jpg",
  "/escos/gallery/g10.jpg",
];

const EventsGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    let scrollAmount = 0;
    const speed = 0.3; // adjust for slower/faster

    const animate = () => {
      if (!gallery) return;
      scrollAmount += speed;
      if (scrollAmount >= gallery.scrollWidth / 2) {
        scrollAmount = 0; // loop
      }
      gallery.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const scrollBy = (offset: number) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  // Duplicate images for infinite scroll effect
  const infiniteImages = [...galleryImages, ...galleryImages];

  return (
    <div className="w-full max-w-6xl relative my-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Past Event Highlights</h2>

      {/* Modern Arrows */}
      <button
        onClick={() => scrollBy(-300)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 text-gray-700 p-3 rounded-full shadow hover:bg-gray-300 transition"
      >
        {"<"}
      </button>
      <button
        onClick={() => scrollBy(300)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 text-gray-700 p-3 rounded-full shadow hover:bg-gray-300 transition"
      >
        {">"}
      </button>

      <div
        ref={galleryRef}
        className="flex overflow-x-hidden whitespace-nowrap gap-4 py-4 px-6"
      >
        {infiniteImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="inline-block min-w-[250px] h-48 relative rounded-xl overflow-hidden shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={img} alt={`Event ${idx}`} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsGallery;
