"use client";

import React from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import OurServices from "@/components/ui/OurServices";
import HomeAbout from "@/components/HomeAbout";
import Locations from "@/components/ui/Locations";
import HomeGallery from "@/components/ui/HomeGallery";
import Reviews from "@/components/ui/Reviews";
import HomerBanner1 from "@/components/HomerBanner1";
import HomeShow from "@/components/ui/HomeShow";
import RadioBanner from "@/components/ui/RadioBanner";
import EventsBanner from "@/components/ui/EventsBanner";
import Calendar from "@/components/ui/Calender";

const heroImages = [
  "/locations/image.jpg",
  "/locations/image2.jpg",
  "/locations/image4.jpg",
];

const HomePage = () => {
  return (
    <div className="space-y-12 lg:space-y-14">
      <HeroBanner />
      <HomerBanner1 />
      <HomeAbout />
      <Locations />
      <RadioBanner />
            <HomeShow />
      <EventsBanner />
      <Calendar />
      <Reviews />
            <HomeGallery />
    </div>
  );
};

export default HomePage;
