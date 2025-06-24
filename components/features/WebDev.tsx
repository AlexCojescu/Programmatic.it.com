import React from 'react';

// --- Reusable SVG Icons for the feature columns ---

const BlueprintIcon = () => (
  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    </svg>
  </div>
);

const ScaleIcon = () => (
  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 6h12l3-6H3z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 16v-2m-5.657-5.657l-1.414-1.414m12.728 0l-1.414 1.414M6 18h12"></path>
    </svg>
  </div>
);

const DevicesIcon = () => (
  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3"></path>
    </svg>
  </div>
);


const WebDev = () => {
  return (
    <section className="bg-white py-24 mt-24 sm:mt-24 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading and Subheading */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Digital Presence & Architecture
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Construct your core digital asset with logic and purpose. We engineer a website that serves as a stable, scalable foundation for all commercial activity.
          </p>
        </div>

        {/* 3-Column Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Core Asset Construction */}
          <div className="text-center">
            <div className="flex justify-center">
              <BlueprintIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Core Asset Construction
            </h3>
            <p className="text-gray-600">
              We don&apos;t just build websites; we engineer your central digital asset. It&apos;s the stable, reliable core from which all marketing and sales activities will operate.
            </p>
          </div>

          {/* Column 2: Scalable Foundation */}
          <div className="text-center">
            <div className="flex justify-center">
              <ScaleIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Scalable & Future-Proof
            </h3>
            <p className="text-gray-600">
              Your business will grow, and your website should grow with it. We build on a flexible foundation that handles increased traffic and new features without a complete rebuild.
            </p>
          </div>

          {/* Column 3: Flawless On Every Device */}
          <div className="text-center">
            <div className="flex justify-center">
              <DevicesIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Optimized for All Platforms
            </h3>
            <p className="text-gray-600">
              A seamless experience is non-negotiable. Your platform will be fully responsive, providing a perfect, intuitive user experience on desktops, tablets, and smartphones alike.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebDev;
