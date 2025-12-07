"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

const galleryImages = [
  "/escos/gallery/g1.jpg",
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

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-4 pb-24 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 text-green-700">Gallery</h1>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {galleryImages.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => openLightbox(idx)}
          >
            <div className="relative w-full aspect-4/3">
              <Image
                src={src}
                alt={`Gallery Image ${idx + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-green-700/25 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg"
            >
              View
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
<AnimatePresence>
  {lightboxIndex !== null && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close */}
      <button
        className="fixed top-6 right-6 text-green-100 text-4xl hover:text-white transition"
        onClick={closeLightbox}
      >
        <IoMdClose />
      </button>

      {/* Previous */}
      <button
        className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 text-green-100 text-4xl hover:text-white transition z-50"
        onClick={prevImage}
      >
        <IoIosArrowBack />
      </button>

      {/* Image */}
      <motion.div
        key={lightboxIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
      >
        <Image
          src={galleryImages[lightboxIndex]}
          alt={`Gallery Image ${lightboxIndex + 1}`}
          width={1200}
          height={900}
          className="object-contain w-full h-full rounded-xl"
        />
      </motion.div>

      {/* Next */}
      <button
        className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 text-green-100 text-4xl hover:text-white transition z-50"
        onClick={nextImage}
      >
        <IoIosArrowForward />
      </button>
    </motion.div>
  )}
</AnimatePresence>

    </main>
  );
};

export default GalleryPage;
