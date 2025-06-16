// components/features/HeroSection.tsx

"use client";

import { VideoText } from "@/components/magicui/video-text";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [opacity, setOpacity] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  // Effect for fade-in animation
  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 100);
    return () => clearTimeout(timer);
  }, []);

  // Effect for parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      setYOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // This container will stick to the top of the viewport
    <div
      className="sticky top-0 h-screen w-full flex items-center justify-center -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]" // <-- GRADIENT ADDED HERE
    >
      <div
        className="w-full h-full transition-opacity duration-1000 ease-in-out"
        style={{
          opacity: opacity,
          transform: `translateY(-${yOffset * 0.5}px)`,
        }}
      >
        <VideoText src="/HeroVid.mp4" fontSize={12}>
          Programmatic
        </VideoText>
      </div>
    </div>
  );
}