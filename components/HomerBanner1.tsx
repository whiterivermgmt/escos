"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const sponsors = [
  "Good Sports",
  "B & B Cars",
  "Paula G Studio",
  "Winsupply Of Bedford",
  "Atchison Eye Care",
  "Crane's Leather and Shoe Shop",
  "Remnant Church",
  "Hoovers Candy Shop",
  "First Baptist Church-Bedford",
  "Lawrence County Community Partnership",
  "American Legion Post 33 Bedford",
  "Thomas Insurance Services",
  "Nanlee Engineering",
  "West End Flower Shop",
  "Long John Silvers-Bedford",
  "Kerns Insurance",
  "Bedford Home Furnishings",
  "The 12 Months Of Christmas",
  "The Stalker Family",
  "Keach & Grove Real Estate",
  "Ringer & Daniels",
  "Westview Nursing And Rehabilitation Center",
];

const colors = ["text-red-600", "text-green-600", "text-black"];

const HomeBanner: React.FC = () => {
  const nowPlayingRef = useRef<HTMLDivElement>(null);
  const [tickerWidth, setTickerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (nowPlayingRef.current) setTickerWidth(nowPlayingRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="w-full relative z-20 -mt-32 md:-mt-40">
      {/* Banner Container */}
      <div className="relative w-full h-[25vh] sm:h-[28vh] md:h-[20vh] lg:h-[22vh] overflow-hidden rounded-xl">
        {/* Banner Image */}
        <Image
          src="/logo/banner1.png"
          alt="Sponsor Banner"
          fill
          className="
            object-cover 
            sm:object-cover 
            md:object-contain
            object-center
          "
        />

        {/* Overlay wrapper */}
        <div className="absolute inset-0 flex justify-center md:justify-center items-center">
          <div className="flex flex-col md:items-center items-start text-left md:text-center px-4 sm:px-6 md:px-8 w-full max-w-[90%]">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black drop-shadow-sm">
              All Your Christmas Favorites Brought To You By:
            </h2>

            {/* Scrolling Sponsors */}
            <div
              className="mt-2 overflow-hidden"
              style={{ width: tickerWidth ? `${tickerWidth}px` : "100%" }}
            >
              <div
                className="inline-block whitespace-nowrap animate-scroll font-semibold text-sm sm:text-base md:text-lg"
                style={{ animationDuration: `${tickerWidth * 0.4}s` }}
              >
                {[...sponsors, ...sponsors].map((sponsor, idx) => (
                  <span key={idx} className={`${colors[idx % colors.length]} mr-4`}>
                    {sponsor}
                  </span>
                ))}
              </div>
            </div>

            {/* Hidden ref for measuring Now Playing width */}
            <div
              ref={nowPlayingRef}
              className="absolute top-0 left-0 opacity-0 pointer-events-none whitespace-nowrap font-semibold text-sm sm:text-base md:text-lg"
            >
              Fun 90.1 WBED – Live Broadcast & Streaming Your Favorite Hits!
            </div>
          </div>
        </div>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        .animate-scroll {
          display: inline-block;
          animation: scroll-left linear infinite;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default HomeBanner;
