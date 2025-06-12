import React from 'react';

const PricingSection = () => {
  return (
    <div className="my-8 sm:my-16">
      <section className="bg-white py-8 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading with responsive typography */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-2">
            Transform your ideas into reality.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 px-2">
            Full transparency. You can cancel anytime.
          </p>
          
          {/* Pricing Card with mobile-first responsive design */}
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-2xl mx-auto text-left
                          shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
            
            {/* Header section with responsive layout */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3 sm:gap-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Development Plan</h3>
              <span className="bg-gray-100 text-gray-800 font-medium py-2 px-4 sm:py-1 sm:px-3 rounded-full text-sm sm:text-base text-center sm:text-left self-start sm:self-auto">
                Custom Pricing
              </span>
            </div>
            
            {/* Description with better mobile spacing */}
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              People or control anytime. Develop your website, landing page, or product
            </p>
            
            {/* Features list with mobile optimization */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-0.5 flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Single request at a time</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-0.5 flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">2x two week development sprints</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-0.5 flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Fully async</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-0.5 flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Weekly meetings</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-0.5 flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Unlimited requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-0.5 flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Work directly with Rhesh</span>
              </li>
            </ul>
            
            {/* CTA button with enhanced mobile design */}
            <a
              href="#contact-me"
              className="inline-block text-center w-full bg-gray-900 text-white font-bold py-4 sm:py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-200 text-base sm:text-base touch-manipulation"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;