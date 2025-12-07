"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: "About Escos Green",
    text: "Escos Green is your local wellness hub, dedicated to providing premium CBD and plant-based wellness products. We focus on health, relaxation, and creating a positive impact in our community.",
    img: "/escos/gallery/g1.jpg",
    bg: "bg-gray-50",
  },
  {
    title: "Our Mission",
    text: "We aim to combine modern wellness methods with ethical sourcing and quality standards. Every product is carefully lab-tested and crafted to ensure safety, effectiveness, and enjoyment.",
    img: "/escos/gallery/g2.jpg",
    bg: "bg-white",
  },
  {
    title: "Community & Events",
    text: "Escos Green isn’t just a shop – we host live shows, community gatherings, and wellness events. Connecting with our neighbors and supporting local initiatives is central to who we are.",
    img: "/escos/gallery/g3.jpg",
    bg: "bg-gray-50",
  },
  {
    title: "Quality & Transparency",
    text: "Quality, transparency, and customer education drive everything we do. Our products are lab-tested, ethically sourced, and curated to help you make informed wellness choices.",
    img: "/escos/gallery/g4.jpg",
    bg: "bg-white",
  },
  {
    title: "Visit Us",
    text: "Come experience Escos Green for yourself! Whether you’re looking for wellness products or a community space to enjoy live shows and events, we welcome everyone to join our green community.",
    img: "/escos/gallery/g5.jpg",
    bg: "bg-gray-50",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20">
      {sections.map((section, index) => {
        const reverse = index % 2 === 1; // flip flop every other section
        return (
          <section key={index} className={`${section.bg} py-20`}>
            <Container className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text */}
              <div
                className={`flex-1 ${
                  reverse ? "lg:order-2 text-left lg:text-right" : "text-left"
                }`}
              >
                <motion.h2
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl font-bold text-green-900 mb-4"
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-green-700 text-base leading-relaxed"
                >
                  {section.text}
                </motion.p>
              </div>

              {/* Image */}
              <div
                className={`flex-1 ${reverse ? "lg:order-1" : ""} rounded-xl overflow-hidden shadow-lg`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={section.img}
                    alt={section.title}
                    width={500}
                    height={350}
                    className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
