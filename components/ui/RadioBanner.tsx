"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const RadioBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <Link href="/shows" className="block w-full relative cursor-pointer">
        <div className="relative w-full" style={{ aspectRatio: "1920 / 600" }}>
          <Image
            src="/locations/radioad.jpg"
            alt="Radio Ad Banner"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default RadioBanner;
