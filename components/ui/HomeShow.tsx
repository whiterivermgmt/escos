"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeContests = () => {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Text + Button (Left) */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Daily Contests</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Fun! 90.1 brings you exciting contests every single day! Tune in for a chance to win prizes, music, and hometown experiences—you never know what’s coming next.
            </p>
            <Link 
              href="/contest" 
              className="inline-block mt-4 px-6 py-3 bg-red-700 text-white rounded-full font-semibold hover:bg-red-600 transition"
            >
              Join the Contests
            </Link>
          </motion.div>

          {/* Image (Right) */}
          <motion.div
            className="flex-1 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/locations/contest.jpg" 
              alt="Daily Contests"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-64 lg:h-80"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default HomeContests;
