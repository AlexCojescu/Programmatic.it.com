"use client";

import { VideoText } from "@/components/magicui/video-text";
import { useState, useEffect, useRef } from "react";

// Helper function for linear interpolation (lerping)
// This is the core of the smoothing effect.
const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

export default function HeroSection() {
  const [opacity, setOpacity] = useState(0);
  // We'll use a ref to store the current smoothed scroll position
  const smoothedYOffset = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Effect for fade-in animation
  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 100);
    return () => clearTimeout(timer);
  }, []);

  // Effect for smooth parallax scroll
  useEffect(() => {
    let animationFrameId: number;
    let targetYOffset = 0;

    const handleScroll = () => {
      // We only update the target position on scroll, not the actual transform
      targetYOffset = window.scrollY;
    };

    const smoothScroll = () => {
      // Calculate the new smoothed Y-offset using lerp
      // The third argument (0.15) controls the speed. A higher value is faster.
      smoothedYOffset.current = lerp(smoothedYOffset.current, targetYOffset, 0.15);
      
      // Apply the transform. `will-change` is a performance hint for the browser.
      if (heroRef.current) {
        heroRef.current.style.willChange = 'transform';
        heroRef.current.style.transform = `translateY(-${smoothedYOffset.current * 0.5}px)`;
      }

      // Continue the loop
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    // Add scroll listener and start the animation loop
    window.addEventListener("scroll", handleScroll);
    animationFrameId = requestAnimationFrame(smoothScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="sticky top-0 h-screen w-full flex items-center justify-center -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]"
    >
      <div
        ref={heroRef}
        className="w-full h-full transition-opacity duration-1000 ease-in-out"
        style={{ opacity: opacity }}
      >
        <VideoText src="/HeroVid.mp4" fontSize={12}>
          Programmatic
        </VideoText>
      </div>
    </div>
  );
}