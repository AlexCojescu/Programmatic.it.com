'use client';

import React from 'react';
import Image from 'next/image';
import BunnyVideoPlayer from './BunnyVideoPlayer';

const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
  </svg>
);

const logos: string[] = Array.from(
  { length: 13 },
  (_, i) => `/Logo${(i + 1).toString().padStart(2, '0')}.png`
);

const ContentStrategy: React.FC = () => {
  const videoLibraryId = '458960';
  const videoId = '38690d4b-c314-4a2c-83e8-e85120f28712';

  return (
    <>
      <section className="bg-white py-16 lg:py-24 mt-24 sm:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Strategic Content Deployment
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Command authority with calculated content. We develop and deploy assets that directly address the search intent of your target market, establishing you as a leader in your field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 lg:mb-24">
            <div className="md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered UGC & Social Posts</h3>
              <p className="text-gray-600 mb-6">
                Generate a high volume of authentic, on-brand content tailored for social media. Our AI models can create user-generated style content, video scripts, and engaging posts that resonate with your audience and drive interaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700"><CheckIcon /> Authentic User-Generated Content (UGC) styles</li>
                <li className="flex items-center text-gray-700"><CheckIcon /> Engaging scripts for short-form video</li>
                <li className="flex items-center text-gray-700"><CheckIcon /> Optimized for platform-specific trends</li>
              </ul>
            </div>
            
            <div className="md:order-2 flex justify-center">
              <BunnyVideoPlayer
                videoLibraryId={videoLibraryId}
                videoId={videoId}
                aspectRatio="9:16"
                className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl overflow-hidden"
              />
            </div>
          </div>

          <div className="flex flex-col items-center text-center mt-20 lg:mt-32">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Logos & Brand Identity</h3>
              <p className="text-gray-600 mb-6">
                Establish a memorable brand identity in minutes. Generate unique, professional logos and a complete brand kit, including color palettes and font pairings, to ensure consistency across all your assets.
              </p>
              <ul className="space-y-3 inline-block text-left">
                <li className="flex items-center text-gray-700"><CheckIcon /> Unique, high-resolution logo generation</li>
                <li className="flex items-center text-gray-700"><CheckIcon /> Complete brand kits (colors, fonts)</li>
                <li className="flex items-center text-gray-700"><CheckIcon /> Vector files ready for print and digital use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Marquee Section */}
      <div className="max-w-6xl mx-auto mb-32 px-4">
        <div className="relative w-full overflow-hidden py-12 marquee-container">
          <div className="marquee-content flex items-center space-x-16">
            {/* First set of logos */}
            {logos.map((logoUrl, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0">
                <Image
                  src={logoUrl}
                  alt={`Logo ${index + 1}`}
                  width={200}
                  height={100}
                  className="h-24 lg:h-32 w-auto object-contain rounded-xl shadow-lg"
                  priority={index < 5}
                />
              </div>
            ))}
            {/* Second set of logos for seamless loop */}
            {logos.map((logoUrl, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0" aria-hidden="true">
                <Image
                  src={logoUrl}
                  alt={`Logo ${index + 1}`}
                  width={200}
                  height={100}
                  className="h-24 lg:h-32 w-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            ))}
            {/* Third set of logos for extra smooth transition */}
            {logos.map((logoUrl, index) => (
              <div key={`set3-${index}`} className="flex-shrink-0" aria-hidden="true">
                <Image
                  src={logoUrl}
                  alt={`Logo ${index + 1}`}
                  width={200}
                  height={100}
                  className="h-24 lg:h-32 w-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }
        
        .marquee-content {
          animation: smoothScroll 60s linear infinite;
          will-change: transform;
          width: fit-content;
        }
        
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        /* Pause on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default ContentStrategy;