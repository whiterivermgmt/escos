"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Escos themed sections
const sections = [
  {
    title: "About Escos Green",
    text: "Escos Green is dedicated to providing premium CBD and wellness products that improve health, relaxation, and everyday well-being. Our journey is rooted in passion, care, and community-focused values.",
    img: "/escos/gallery/g8.jpg",
    reverse: false,
    buttonText: "Learn More",
    buttonHref: "/whatwedo",
  },
  {
    title: "Our Mission",
    text: "We strive to combine traditional wellness methods with modern innovation, ensuring every product is ethically sourced, lab-tested, and crafted to meet the highest standards. Supporting our community and environment is at the core of everything we do.",
    img: "/escos/gallery/g2.jpg",
    reverse: true,
    buttonText: "Questions?",
    buttonHref: "/faq",
  },
];

const HomeContests = () => {
  return (
    <section className="bg-gray-50 py-12 lg:py-16 space-y-16">
      <Container>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              section.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text + Button */}
            <motion.div
              className="flex-1 text-center lg:text-left space-y-4"
              initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-green-800">{section.title}</h2>
              <p className="text-green-700 text-lg leading-relaxed">{section.text}</p>
              {section.buttonText && section.buttonHref && (
                <Link
                  href={section.buttonHref}
                  className="inline-block mt-4 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
                >
                  {section.buttonText}
                </Link>
              )}
            </motion.div>

            {/* Image */}
            <motion.div
              className="flex-1 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: section.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={section.img}
                alt={section.title}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-64 lg:h-80"
              />
            </motion.div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default HomeContests;
