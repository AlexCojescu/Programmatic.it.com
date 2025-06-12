import React from 'react';

const QuoteSection = () => {
  return (
    <section 
      className="w-full py-16 sm:py-10"
      style={{ 
        backgroundColor: '#DBEAFE',  // Matches blue-100 from your gradient
        backgroundImage: 'linear-gradient(to bottom, #DBEAFE, #DBEAFE)' // Ensures solid color
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure className="max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <div className="absolute -top-4 -left-4 sm:-left-8">
              <svg 
                className="h-8 w-8" 
                fill="#3B82F6"  // blue-500 for better contrast
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <p 
              className="text-2xl sm:text-3xl font-medium"
              style={{ color: '#1E3A8A' }}  // blue-900 for good readability
            >
              A one-person billion-dollar company will happen.
            </p>
          </blockquote>
          <figcaption className="mt-6">
            <div 
              className="text-base"
              style={{ color: '#2563EB' }}  // blue-600
            >
              &ndash; Sam Altman, CEO of OpenAI
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default QuoteSection;