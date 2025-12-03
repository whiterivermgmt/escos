"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import Clouds from "./Clouds";

const LiveRadio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);

  const streamUrl = "http://23.29.119.99:8089/live.mp3?1764637944759";

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full bg-sky-100 flex flex-col md:flex-row items-center justify-center px-6 py-6 md:py-12 shadow-md border-gray-300 overflow-hidden">

      {/* Cloud layer */}
      <Clouds />

      {/* Snow layer */}
      <div className="absolute top-[100px] left-0 w-full h-[70px] pointer-events-none z-20 overflow-visible">
        <div className="snow1"></div>
        <div className="snow2"></div>
        <div className="snow3"></div>
      </div>

      {/* Now Playing */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 max-w-lg overflow-hidden relative z-30">
        <span className="uppercase text-red-700 font-semibold mr-2 shrink-0">
          Now Playing:
        </span>
        <div className="overflow-hidden whitespace-nowrap w-64 md:w-96 relative">
          <div className="animate-marquee inline-block text-green-900 font-medium">
            Fun 90.1 WBED – Live Broadcast &nbsp;•&nbsp; Streaming Your Favorite Hits!
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-3 md:mt-0 md:ml-6 relative z-30">
        <button
          onClick={togglePlay}
          className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer shadow transition-all duration-200 ${
            isPlaying
              ? "bg-red-700 hover:bg-red-800 text-white"
              : "bg-green-800 hover:bg-green-900 text-white"
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-red-700" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 h-1 rounded-lg accent-red-700 cursor-pointer"
          />
        </div>
      </div>

      <audio ref={audioRef} src={streamUrl} />
    </div>
  );
};

export default LiveRadio;
