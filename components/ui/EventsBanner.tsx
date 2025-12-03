"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const EventsBannerWithShortSideAds = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Sizes
  const mainWidth = 400;
  const mainHeight = 600;
  const sideWidth = 400; 
  const sideHeight = 180; // short horizontal ads

  const sideImages = [
    "/locations/ad.jpg",
    "/locations/ad3.jpg",
    "/locations/ad1.jpg",
  ];

  return (
    <div
      ref={ref}
      className={`
        w-full flex flex-wrap justify-center items-start gap-6 md:gap-8
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        py-6
      `}
    >
      {/* Main Event Banner */}
      <div
        className="relative flex-shrink-0 transform transition-transform duration-700 hover:scale-105"
        style={{ width: mainWidth, height: mainHeight }}
      >
        <Image
          src="/logo/events.png"
          alt="Events Banner"
          fill
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* Side Ads Row */}
      <div className="flex flex-wrap justify-center md:flex-col md:justify-start md:gap-6 gap-4 w-full md:w-auto">
        {sideImages.map((src, index) => (
          <div
            key={index}
            className="relative transform transition-transform duration-700 hover:scale-105 mx-auto md:mx-0"
            style={{ width: sideWidth, height: sideHeight }}
          >
            <Image
              src={src}
              alt={`Side Ad ${index + 1}`}
              fill
              className="object-cover w-full h-full rounded-lg shadow-md"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsBannerWithShortSideAds;
