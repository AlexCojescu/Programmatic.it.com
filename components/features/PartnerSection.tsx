"use client";

import React from 'react';

const PartnerSection = () => {
  return (
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
                Hello, my name is Alex.
                <br />
                <span className="text-purple">
                  I am a software engineer, techpreneur, &amp; your partner.
                </span>
              </h3>

              <p className="leading-relaxed text-white-200">
                With over 6 years of experience in software development and design, I excel as a leading
                software engineer with a specialization in software automation. Having serviced 50+ clients
                with transactions exceeding $200,000, I&apos;m ready to create a personalized software solution for
                you. Got a design, software, or website in mind? Let&apos;s create it!
              </p>

              {/* The button is now an anchor tag `<a>` pointing to the specified URL. */}
              <a
                href="https://alexandrucojescu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center font-bold py-3 px-8 rounded-full transition bg-[#e6f0ff] text-black-100 hover:bg-[#e6f0ff]/90"
              >
                Learn More!
              </a>
            </div>
          </div>

          {/* Right Column - Circular Image */}
          <div className="flex justify-end items-center w-full h-full min-h-[400px] md:h-auto md:min-h-[500px]">
            {/* The circular image component */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <img
                src="/Portrait.png"
                alt="A portrait of Alex"
                width={400}
                height={400}
                className="rounded-full object-cover w-full h-full shadow-lg ring-4 ring-offset-4 ring-offset-black-100 ring-blue-100/90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;