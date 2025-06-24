'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

// --- DATA FOR THE DROPDOWN ---
const services = [
  { 
    title: "Digital Presence & Architecture",
    href: '/digital-architecture',
    description: "Build a scalable, conversion-optimized foundation for your business."
  },
  { 
    title: "Intent-Driven Lead Generation",
    href: '/lead-generation',
    description: "Engage active buyers and shorten your sales cycles with targeted data."
  },
  { 
    title: "Marketing & Systems Automation",
    href: '/automations',
    description: "Systematize operations to expand capacity and improve accuracy."
  },
  { 
    title: "Strategic Content Deployment",
    href: '/content-strategy',
    description: "Command authority and guide prospects with calculated, valuable content."
  },
];

// --- Reusable Chevron Icon ---
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);


const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false); // Also close services dropdown
  }

  return (
    <nav
      className={`w-full fixed top-0 bg-white z-50 transition-all duration-500 shadow-lg ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src="/Logo1.png"
              alt="Slute Logo"
              width={130}
              height={78}
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* --- DESKTOP NAVIGATION (UNCHANGED) --- */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors duration-200 cursor-pointer relative group font-medium">
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div 
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="relative"
          >
            <button className="flex items-center text-gray-800 hover:text-purple-600 transition-colors duration-200 cursor-pointer relative group font-medium">
              Services
              <ChevronDown className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-2xl p-4"
                >
                  <div className="space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="block p-3 rounded-md hover:bg-blue-50 transition-colors"
                      >
                        <p className="font-semibold text-gray-900">{service.title}</p>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#pricing" className="text-gray-800 hover:text-purple-600 transition-colors duration-200 cursor-pointer relative group font-medium">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Link
            href="/contact"
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-700 transition transform hover:scale-105 active:scale-95 duration-200 shadow-lg hover:shadow-blue-600/50"
          >
            Schedule a call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none" aria-label="Toggle menu">
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span className={`block h-0.5 bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
              <span className={`block h-0.5 bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN (MODIFIED) --- */}
      <div className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] pt-4 pb-8' : 'max-h-0'}`}>
        {/* CHANGED: Added `pb-8` for more space at the bottom */}
        <div className="flex flex-col items-center space-y-2 px-6">
          <a href="#" onClick={closeMobileMenu} className="text-gray-800 text-lg w-full text-center py-3">Work</a>
          
          {/* Mobile Services Accordion */}
          <div className="w-full border-t border-b border-gray-200">
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="relative w-full text-lg text-center py-3"
            >
              {/* CHANGED: Text is now centered by default */}
              <span>Services</span>
              {/* CHANGED: Chevron is positioned absolutely */}
              <ChevronDown className={`absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
              <div className="flex flex-col space-y-1 pt-2 pb-4 pl-4 border-t border-gray-200">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={closeMobileMenu}
                    className="block p-3 rounded-md text-left text-gray-700 hover:bg-blue-50"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a href="#pricing" onClick={closeMobileMenu} className="text-gray-800 text-lg w-full text-center py-3">Pricing</a>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="bg-blue-600 text-white font-medium py-3 px-6 rounded-full hover:bg-blue-700 transition w-full max-w-xs mt-4 text-center"
          >
            Schedule a call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;