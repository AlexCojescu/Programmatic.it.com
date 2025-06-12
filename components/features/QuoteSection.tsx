import React from 'react';

const QuoteSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure className="max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <div className="absolute -top-4 -left-4 sm:-left-8">
            </div>
            <p className="text-2xl sm:text-3xl font-medium text-gray-900">
              &quot;A one-person billion-dollar company will happen.&quot;
            </p>
          </blockquote>
          <figcaption className="mt-6">
            <div className="text-base text-gray-600">
              &ndash; Sam Altman, CEO of OpenAI
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default QuoteSection;