"use client";
import React from 'react';
import { PointerHighlight } from '@/components/ui/pointer-highlight';

const ProcessSection = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-8 lg:px-16 w-full bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Heading with responsive spacing */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 sm:mb-6 flex flex-col sm:flex-row justify-center items-center sm:items-baseline gap-1 sm:gap-0">
            <span>Our</span>
            <PointerHighlight
              rectangleClassName="border-blue-600"
              pointerClassName="text-blue-600"
              containerClassName="sm:mx-2"
            >
              <span className="font-medium text-blue-600 relative z-10">Streamlined</span>
            </PointerHighlight>
            <span>Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Efficient automation solutions with Google-like simplicity
          </p>
        </div>

        {/* Process steps with mobile-first responsive design */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Step 1 - Subscribe */}
          <div className="bg-white rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-200 shadow-[0_4px_6px_-1px_rgba(59,130,246,0.1),0_2px_4px_-1px_rgba(59,130,246,0.06)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3 sm:mb-0 sm:mr-5 shrink-0">
                <span className="text-blue-600 font-medium text-lg sm:text-xl">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">Subscribe</h3>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Select your plan and gain instant access to our automation platform with dedicated support channels.
            </p>
          </div>

          {/* Step 2 - Request */}
          <div className="bg-white rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-200 shadow-[0_4px_6px_-1px_rgba(59,130,246,0.1),0_2px_4px_-1px_rgba(59,130,246,0.06)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-50 flex items-center justify-center mb-3 sm:mb-0 sm:mr-5 shrink-0">
                <span className="text-green-600 font-medium text-lg sm:text-xl">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">Request</h3>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Submit automation tasks through our intuitive dashboard with clear specifications and priority settings.
            </p>
          </div>

          {/* Step 3 - Refine */}
          <div className="bg-white rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-200 shadow-[0_4px_6px_-1px_rgba(59,130,246,0.1),0_2px_4px_-1px_rgba(59,130,246,0.06)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-50 flex items-center justify-center mb-3 sm:mb-0 sm:mr-5 shrink-0">
                <span className="text-red-600 font-medium text-lg sm:text-xl">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">Refine</h3>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Collaborate with our team to perfect each automation until it meets your exact requirements.
            </p>
          </div>
        </div>

        {/* CTA Section with mobile optimization */}
        <div className="mt-8 sm:mt-12 text-center">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-base sm:text-lg transition-colors duration-200 shadow-sm hover:shadow-md">
            Begin Automation Journey
          </button>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 px-2">
            Trusted by 1,000+ businesses worldwide • 24-hour onboarding
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;