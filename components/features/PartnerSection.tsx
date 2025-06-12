"use client";

import React from 'react';
// Import the World component from your new globe UI file

// --- Main Section Component ---
const PartnerSection = () => {

  return (
    // The main section container with the default dark theme.
    <section className="py-16 px-6 bg-black-100 text-white-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Who you will partner with.
            </h2>
            <p className="text-lg mb-8 text-white-200">
              We build trust, confidence, and security throughout our process.
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Hello, my name is Ritesh Verma.
                <br />
                <span className="text-purple">
                  I am a software engineer, techpreneur, & your partner.
                </span>
              </h3>

              <p className="leading-relaxed text-white-200">
                With over 6 years of experience in software development and design, I excel as a leading
                software engineer with a specialization in software automation. Having serviced 50+ clients
                with transactions exceeding $200,000, I'm ready to create a personalized software solution for
                you. Got a design, software, website in mind? Let's create it!
              </p>

              <button className="font-bold py-3 px-8 rounded-full transition bg-blue-100 text-black-100 hover:bg-blue-100/90">
                Let's chat!
              </button>
            </div>
          </div> 

          {/* Right Column - 3D Globe Canvas */}
          <div className="flex justify-center items-center w-full h-full min-h-[400px] md:h-auto md:min-h-[500px]">
             {/* The new World component is rendered here */}
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;