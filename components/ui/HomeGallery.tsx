"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryImages = [
  "/services/gallery1.jpg",
  "/services/gallery2.jpg",
  "/services/gallery3.jpg",
  "/services/gallery4.jpg",
  "/services/gallery5.jpg",
  "/services/gallery6.jpg",
  "/services/gallery7.jpg",
  "/services/gallery8.jpg",
];


const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-white py-12 lg:py-16 relative overflow-hidden">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...galleryImages, ...galleryImages].map((img, idx) => (
              <div
                key={idx}
                className="relative min-w-[300px] flex-shrink-0 cursor-pointer rounded-lg overflow-hidden shadow-lg"
                onClick={() => openLightbox(idx % galleryImages.length)}
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* View Gallery Button */}
        <div className="mt-6 text-center">
          <a
            href="/gallery"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-full shadow-xl hover:scale-105 hover:opacity-90 transition transform text-lg"
          >
            View Full Gallery
          </a>
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-2xl p-2 rounded-full hover:bg-white/20 transition z-50"
            >
              <FaTimes />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-2xl p-2 rounded-full hover:bg-white/20 transition z-50"
            >
              <FaChevronLeft />
            </button>

            <div className="max-w-[90%] max-h-[80%] relative">
              <Image
                src={galleryImages[currentIndex]}
                alt={`Gallery ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain rounded-lg"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-2xl p-2 rounded-full hover:bg-white/20 transition z-50"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
