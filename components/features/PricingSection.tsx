import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-black-100 text-white-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Transform your ideas into reality.
        </h2>
        <p className="text-lg text-white-200 mb-12">
          Full transparency. You can cancel anytime.
        </p>

        {/* Pricing Card */}
        <div className="bg-black-200 rounded-xl p-8 max-w-2xl mx-auto text-left">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Development Plan</h3>
            <span className="bg-purple text-black-100 font-medium py-1 px-3 rounded-full">
              Custom Pricing
            </span>
          </div>

          <p className="text-white-200 mb-8">
            People or control anytime. Develop your website, landing page, or product
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-purple mr-2">•</span>
              <span>Single request at a time</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple mr-2">•</span>
              <span>2x two week development sprints</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple mr-2">•</span>
              <span>Fully async</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple mr-2">•</span>
              <span>Weekly meetings</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple mr-2">•</span>
              <span>Unlimited requests</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple mr-2">•</span>
              <span>Work directly with Rhesh</span>
            </li>
          </ul>

          <button className="w-full bg-blue-100 text-black-100 font-bold py-3 px-6 rounded-full hover:bg-blue-100/90 transition">
            Schedule a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;