"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuGallery from "@/components/ui/MenuGallery";
import EventsBanner from "@/components/ui/EventsBanner";
import Calendar from "@/components/ui/Calender";
import Reviews from "@/components/ui/Reviews";
import SocialMediaHeader from "@/components/ui/SocialMediaHeader";
import HomeShow from "@/components/ui/HomeShow";
import Link from "next/link";
import HomeGallery from "@/components/ui/HomeGallery";
import Locations from "@/components/ui/Locations";
import HomeBanner from "@/components/HomerBanner1";
import HeroBanner from "@/components/ui/HeroBanner";
import WhyChooseEscos from "@/components/ui/WhyEscos";
import WhyEscos from "@/components/ui/WhyEscos";

const featuredMenu = [
  {
    title: "Dine In At Johnny Junxions",
    description:
      "Enjoy freshly prepared meals right here at our gas station with plenty of seating. From signature pizzas to classic combos, every dish is made fresh from our own kitchen and ready to satisfy your cravings.",
    img: "/gallery/menu1.jpg",
    reverse: false,
  },
  {
    title: "Grab & Go!",
    description:
      "In a hurry? Johnny Junxions has you covered with quick, freshly made meals perfect for those on the run. Stop by, grab your favorites, and keep moving!",
    img: "/gallery/menu.jpg",
    reverse: true,
  },
];

const categories = [
  { name: "Signatures", img: "/gallery/gallery19.jpg" },
  { name: "Breakfast", img: "/gallery/gallery8.jpg" },
  { name: "Pizza", img: "/gallery/galery12.jpg" },
  { name: "Sandwiches", img: "/gallery/galery11.jpg" },
  { name: "Chicken Tenders", img: "/gallery/galery3.jpg" },
];

const HomePage = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main className="bg-white px-4  flex flex-col items-center space-y-20">


      {/* Hero Section */}
      <section className="relative w-full  mt-6 h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
        <HeroBanner />
  
      </section>
            <WhyEscos />
      <Locations />
      <HomeShow />
    
      <section className="w-full max-w-6xl">
        <Calendar />
      </section>


      <section className="w-full max-w-6xl">
        <HomeGallery />
      </section>
    </main>
  );
};

export default HomePage;
