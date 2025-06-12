"use client";
import React from 'react';
import { PointerHighlight } from '@/components/ui/pointer-highlight';

const ProcessSection = () => {
  return (
    <section className="py-12 px-8 lg:px-16 w-full bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Heading with expanded spacing */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-6 flex justify-center items-baseline">
            <span>Our</span>
            <PointerHighlight
              rectangleClassName="border-blue-600"
              pointerClassName="text-blue-600"
              containerClassName="mx-2"
            >
              <span className="font-medium text-blue-600 relative z-10">Streamlined</span>
            </PointerHighlight>
            <span>Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Efficient automation solutions with Google-like simplicity
          </p>
        </div>

        {/* Process steps with consistent shadows */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 - Subscribe */}
          <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-200 shadow-[0_4px_6px_-1px_rgba(59,130,246,0.1),0_2px_4px_-1px_rgba(59,130,246,0.06)]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-5">
                <span className="text-blue-600 font-medium text-xl">1</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900">Subscribe</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Select your plan and gain instant access to our automation platform with dedicated support channels.
            </p>
          </div>

          {/* Step 2 - Request */}
          <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-200 shadow-[0_4px_6px_-1px_rgba(59,130,246,0.1),0_2px_4px_-1px_rgba(59,130,246,0.06)]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-5">
                <span className="text-green-600 font-medium text-xl">2</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900">Request</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Submit automation tasks through our intuitive dashboard with clear specifications and priority settings.
            </p>
          </div>

          {/* Step 3 - Refine */}
          <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-200 shadow-[0_4px_6px_-1px_rgba(59,130,246,0.1),0_2px_4px_-1px_rgba(59,130,246,0.06)]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mr-5">
                <span className="text-red-600 font-medium text-xl">3</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900">Refine</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Collaborate with our team to perfect each automation until it meets your exact requirements.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-lg transition-colors duration-200 shadow-sm hover:shadow-md">
            Begin Automation Journey
          </button>
          <p className="mt-4 text-gray-500">
            Trusted by 1,000+ businesses worldwide • 24-hour onboarding
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;