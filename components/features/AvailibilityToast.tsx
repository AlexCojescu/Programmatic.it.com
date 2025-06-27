// components/AvailabilityToast.tsx
'use client';

import React, { useState, useEffect } from 'react';

const AvailabilityToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This effect runs once when the component mounts.
  // It waits for 5 seconds before making the toast visible.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5-second delay

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // --- Dynamic Content Logic ---
  // Automatically calculates the next quarter to make the message feel current.
  const getCurrentQuarter = () => {
    const month = new Date().getMonth(); // 0-11
    if (month < 3) return 'Q2'; // Jan-Mar -> Q2
    if (month < 6) return 'Q3'; // Apr-Jun -> Q3
    if (month < 9) return 'Q4'; // Jul-Sep -> Q4
    return 'Q1'; // Oct-Dec -> Q1 of next year
  };

  const nextQuarter = getCurrentQuarter();

  // If the toast is not visible, don't render anything.
  if (!isVisible) {
    return null;
  }

  return (
    // --- Main container with fixed positioning ---
    // Positions the toast at the bottom-left of the viewport.
    // The `transform` and `transition` classes create the smooth slide-in effect.
    <div
      className={`fixed bottom-5 right-5 z-50 w-full max-w-sm transform transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      {/* --- Toast styling --- */}
      {/* Clean white background, rounded corners, and a professional shadow. */}
      <div className="rounded-xl bg-white p-5 shadow-2xl ring-1 ring-black ring-opacity-5">
        <div className="flex items-start space-x-4">
          
          {/* --- The "Live" dot --- */}
          {/* A subtle, pulsing green dot to attract the eye without being intrusive. */}
          <div className="flex-shrink-0 pt-1">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>

          {/* --- Content section --- */}
          <div className="flex-1">
            <p className="text-base font-semibold text-gray-900">
              Project Slot Availability
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Project planning for {nextQuarter} is closing soon. To maintain quality, we are accepting <span className="text-blue-600">2</span> more clients for this period.
            </p>

            {/* --- Action button --- */}
            {/* A clean, high-contrast button to encourage clicks. */}
            <div className="mt-4">
              <a
                href="/contact" // Change this to your contact or booking page link
                className="inline-block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Inquire About a Slot
              </a>
            </div>
          </div>

          {/* --- Close button --- */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsVisible(false)}
              className="inline-flex rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Dismiss"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityToast;