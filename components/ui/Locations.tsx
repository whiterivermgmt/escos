"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Sponsor images
const sponsorImages = [
  "/locations/ad.jpg",
  "/locations/ad1.jpg",
  "/locations/ad3.jpg",
];

const Locations: React.FC = () => {
  // Weather widget script
  useEffect(() => {
    const scriptId = "weatherwidget-io-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://weatherwidget.io/js/widget.min.js";
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (window.__weatherwidget_init) window.__weatherwidget_init();
    }
  }, []);

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sponsorImages.length);
    }, 6000); // 6 seconds per image
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT — MODERN WEATHER CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between h-[350px]">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Bedford</h2>
              <p className="text-red-700 font-semibold mt-1">
                Fun 90.1 Storm Team Weather
              </p>
            </div>

            {/* CURRENT WEATHER */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-5xl leading-none">⛅</span>
              <span className="text-5xl font-extrabold text-gray-900">45°F</span>
            </div>

            {/* 3-DAY FORECAST */}
            <div className="grid grid-cols-3 text-center mt-6">
              {[
                { day: "Tue", icon: "🌧️", temp: "44°" },
                { day: "Wed", icon: "☁️", temp: "47°" },
                { day: "Thu", icon: "⛅", temp: "50°" },
              ].map((d, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <p className="font-semibold">{d.day}</p>
                  <p className="text-lg">{d.icon}</p>
                  <p className="text-gray-700">{d.temp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — SMOOTH CROSSFADE SPONSOR SLIDER */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl bg-black">
            <AnimatePresence>
              <motion.div
                key={sponsorImages[currentIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={sponsorImages[currentIndex]}
                  alt="Sponsor"
                  fill
                  className="object-contain bg-black"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Locations;
