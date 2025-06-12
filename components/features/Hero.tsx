import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-center bg-black-100 text-white-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Software & Development<br />
          <span className="text-purple">Partner.</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-blue-100">
          We Make Your Ideas Reality
        </h2>
        
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white-200">
          Eliminate the hassles that come with complicated agencies and freelancers with
          one flat monthly fee, and designs & software delivered at lightning speeds.
        </p>
        
        <button className="bg-purple hover:bg-purple/90 text-black-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 mb-8">
          Get Started
        </button>
        
        <div className="max-w-2xl mx-auto mb-12">
          <blockquote className="text-lg italic leading-relaxed text-white-200">
            "Ricish helped me in developing a software that I needed for my server that discusses the stock market..."
          </blockquote>
        </div>
        
        <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
          <Image
            src="/logo.png"
            alt="Software demonstration"
            width={800}
            height={450}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;