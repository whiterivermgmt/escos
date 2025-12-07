"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const featuredImages = [
  "/escos/gallery/g1.jpg",
  "/escos/gallery/g2.jpg",
  "/escos/gallery/g3.jpg",
  "/escos/gallery/g4.jpg",
];

const Locations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredImages.length);
    }, 5000); // rotate every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT — ROTATING IMAGE SLIDER */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
            <AnimatePresence>
              <motion.div
                key={featuredImages[currentIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={featuredImages[currentIndex]}
                  alt="Escos Featured"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — ESCOS INFO CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between h-[350px]">
            <div>
              <h2 className="text-2xl font-bold text-green-800">Escos Green</h2>
              <p className="text-green-700 font-semibold mt-1">
                Premium CBD & Wellness Products
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-gray-700">
                Discover our range of lab-tested CBD oils, edibles, and wellness products, crafted with care and ethically sourced for maximum quality.
              </p>
              <p className="text-gray-700">
                Join our community events and live shows for tips, demos, and fun giveaways!
              </p>
            </div>

            <div className="mt-6">
              <a
                href="/faq"
                className="inline-block px-6 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-orange-500 transition"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Locations;
