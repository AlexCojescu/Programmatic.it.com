import React from 'react';

const PricingSection = () => {
  // A reusable checkmark icon for the features list
  const CheckIcon = () => (
    <svg className="w-5 h-5 mr-2.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  return (
    <div className="my-8 sm:my-16">
      <section className="bg-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Heading and Subheading */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Custom Solutions to Grow Your Business
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Let's work together to build the perfect AI-powered solution for your needs.
            </p>
          </div>

          {/* NEW: Early Adopter / Portfolio-Building Section */}
          <div className="max-w-3xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center mb-12 sm:mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Now Accepting New Portfolio Clients!</h3>
            <p className="text-gray-700">
              As I build my portfolio, I'm offering my first few clients foundational pricing. This is a unique opportunity to get dedicated service and cutting-edge solutions at an exceptional value. Let's connect!
            </p>
          </div>

          {/* Pricing Grid - 2 columns on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Plan 1: Digital Presence & Architecture */}
            <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Presence & Architecture</h3>
                <p className="text-gray-600 mb-6">Build a powerful, scalable foundation for your business.</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900">Custom Quote</p>
                  <p className="text-gray-500 font-medium">One-Time Project</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700"><CheckIcon /> Core Asset Construction</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Scalable Website Foundation</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Responsive Cross-Platform Design</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Optimized for Conversion</li>
                </ul>
              </div>
              <a href="#contact-me" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-blue-700 transition-colors">
                Schedule a Free Discovery Call
              </a>
            </div>

            {/* Plan 2: Intent-Driven Lead Generation */}
            <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Intent-Driven Lead Generation</h3>
                <p className="text-gray-600 mb-6">Engage active buyers and shorten your sales cycle.</p>
                <div className="mb-6">
                    <p className="text-gray-500 font-medium mb-1">Monthly Retainer</p>
                    <p className="text-4xl font-bold text-gray-900">Starting at $1,500<span className="text-xl font-medium text-gray-500">/mo</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700"><CheckIcon /> Active Buyer Identification</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> High-Intent Contact Lists</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Reduced Sales Cycles</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Actionable Search Intelligence</li>
                </ul>
              </div>
              <a href="#contact-me" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-blue-700 transition-colors">
                Schedule a Free Discovery Call
              </a>
            </div>

            {/* Plan 3: Marketing & Systems Automation */}
            <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Marketing & Systems Automation</h3>
                <p className="text-gray-600 mb-6">Systematize operations to expand capacity and accuracy.</p>
                <div className="mb-6">
                    <p className="text-gray-500 font-medium mb-1">Monthly Retainer</p>
                    <p className="text-4xl font-bold text-gray-900">Starting at $1,200<span className="text-xl font-medium text-gray-500">/mo</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700"><CheckIcon /> Systematic Campaign Execution</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Unified Data Systems (CRM, etc.)</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Manual Process Eradication</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Resource & Accuracy Gains</li>
                </ul>
              </div>
              <a href="#contact-me" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-blue-700 transition-colors">
                Schedule a Free Discovery Call
              </a>
            </div>

            {/* Plan 4: Strategic Content Deployment */}
            <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategic Content Deployment</h3>
                <p className="text-gray-600 mb-6">Command authority with content that converts.</p>
                <div className="mb-6">
                    <p className="text-gray-500 font-medium mb-1">Monthly Retainer</p>
                    <p className="text-4xl font-bold text-gray-900">Starting at $1,800<span className="text-xl font-medium text-gray-500">/mo</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700"><CheckIcon /> Calculated Content Strategy</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Search-Intent Focused Articles</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Establish Market Leadership</li>
                  <li className="flex items-center text-gray-700"><CheckIcon /> Full-Funnel Content Structure</li>
                </ul>
              </div>
              <a href="#contact-me" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-blue-700 transition-colors">
                Schedule a Free Discovery Call
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;