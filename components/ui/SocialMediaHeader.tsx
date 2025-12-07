"use client";

import React, { useState, useEffect } from "react";
import { SiFacebook, SiGoogle, SiYelp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Open Daily 9AM - 9PM",
  "Fresh Green Products Available",
  "Weekly Specials Every Friday",
  "Visit Us in Bedford, IN",
];

const SocialMediaHeader = () => {
  const socials = [
    {
      icon: <SiFacebook size={18} />,
      href: "https://www.facebook.com/profile.php?id=100063690004065",
      label: "Facebook",
      bg: "#1877F2",
    },
    {
      icon: <SiGoogle size={18} />,
      href: "https://www.google.com/search?q=escos+green",
      label: "Google Reviews",
      bg: "#DB4437",
    },
    {
      icon: <SiYelp size={18} />,
      href: "https://www.yelp.com/biz/escos-green-bedford",
      label: "Yelp",
      bg: "#D32323",
    },
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full z-50">
      <div className="w-full bg-gradient-to-r from-green-700 to-green-500 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4 px-6 py-2 text-white">

          {/* Left Side: Banner + Rotating Info */}
          <div className="flex flex-row items-center gap-3 flex-wrap md:flex-nowrap">
            <span className="font-bold text-sm md:text-base uppercase tracking-wide">
              Let's All Go to Escos!
            </span>

            <div className="relative h-6 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentMessage}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute text-sm md:text-base"
                >
                  {messages[currentMessage]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex gap-3 items-center">
            {socials.map((social, idx) => (
              <div key={idx} className="relative group flex flex-col items-center">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full shadow-md transition-transform transform hover:scale-110"
                  style={{ backgroundColor: social.bg, color: "white" }}
                >
                  {social.icon}
                </a>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  {social.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SocialMediaHeader;
