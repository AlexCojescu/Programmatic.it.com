// CombinedLayout.tsx
import React from 'react';
import ProcessSection from './ProcessSection';
import ContactForm from './contactme';

const CombinedLayout = () => {
  return (
    <div className="bg-gray-50"> {/* Removed min-h-screen */}
      {/* Main container with responsive grid - adjusted proportions */}
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-0"> {/* Removed min-h-screen */}
        {/* Left side - Process Section */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-3xl p-6 lg:p-8">
            <ProcessSection />
          </div>
        </div>
        
        {/* Right side - Contact Form - moved closer to left */}
        <div className="flex items-center justify-start bg-white">
          <div className="w-full max-w-2xl p-8 lg:pl-4 lg:pr-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedLayout;