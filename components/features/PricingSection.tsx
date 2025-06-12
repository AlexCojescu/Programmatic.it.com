import React from 'react';

const PricingSection = () => {
  return (
    <div className="my-16">
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Transform your ideas into reality.
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Full transparency. You can cancel anytime.
          </p>

          {/* Pricing Card with full shadow */}
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto text-left 
                         shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Development Plan</h3>
              <span className="bg-gray-100 text-gray-800 font-medium py-1 px-3 rounded-full">
                Custom Pricing
              </span>
            </div>

            <p className="text-gray-600 mb-8">
              People or control anytime. Develop your website, landing page, or product
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-700">Single request at a time</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-700">2x two week development sprints</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-700">Fully async</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-700">Weekly meetings</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-700">Unlimited requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-700">Work directly with Rhesh</span>
              </li>
            </ul>

            {/* The button is now a link pointing to the contact section */}
            <a 
              href="#contact-me"
              className="inline-block text-center w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition"
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