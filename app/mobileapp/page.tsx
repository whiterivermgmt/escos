"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { headerData } from "@/Constants/data";

const ComingSoonPage = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden text-center">
      {/* Optional subtle snowflakes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, idx) => (
          <div
            key={idx}
            className="absolute w-1.5 h-1.5 bg-gray-500 rounded-full animate-snowflake opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Image
          src="/logo/radio.png"
          alt="Fun! 90.1 WBED Logo"
          width={200}
          height={100}
          className="mx-auto"
        />
      </motion.div>

      {/* Coming Soon Message */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-black max-w-lg"
      >
        <h1 className="text-5xl font-bold mb-4">🎄 Coming Soon! 🎄</h1>
        <p className="text-lg mb-6">
          We’re updating our site for the holiday season! Stay tuned for a
          festive Fun! 90.1 WBED experience.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-yellow-300 text-red-800 font-bold hover:bg-yellow-400 transition"
        >
          Go to Home
        </Link>
      </motion.div>

      {/* Quick Links */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {headerData.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="text-white hover:text-yellow-300 transition font-medium"
          >
            {link.title}
          </Link>
        ))}
      </div>

     
    </main>
  );
};

export default ComingSoonPage;
