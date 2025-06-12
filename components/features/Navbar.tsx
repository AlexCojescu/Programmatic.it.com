'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`w-full fixed top-0 bg-black-100 border-b border-black-200 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo1.png"
            alt="Slute Logo"
            width={100}
            height={60}
            className="h-10 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white-100 hover:text-purple transition-colors duration-200 cursor-pointer relative group">
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-white-100 hover:text-purple transition-colors duration-200 cursor-pointer relative group">
            Benefits
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-white-100 hover:text-purple transition-colors duration-200 cursor-pointer relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button className="bg-blue-100 text-black-100 font-medium py-2 px-4 rounded-full hover:bg-blue-100/90 transition transform hover:scale-105 active:scale-95 duration-200 shadow-lg hover:shadow-blue-100/50">
            Schedule a call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMobileMenu}
            className="text-white-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-black-100 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
        <div className="flex flex-col items-center space-y-6 px-6">
          <a href="#" className="text-white-100 hover:text-purple transition-colors duration-200 w-full text-center py-2 border-b border-black-200">
            Work
          </a>
          <a href="#" className="text-white-100 hover:text-purple transition-colors duration-200 w-full text-center py-2 border-b border-black-200">
            Benefits
          </a>
          <a href="#" className="text-white-100 hover:text-purple transition-colors duration-200 w-full text-center py-2 border-b border-black-200">
            Pricing
          </a>
          <button className="bg-blue-100 text-black-100 font-medium py-2 px-6 rounded-full hover:bg-blue-100/90 transition w-full max-w-xs">
            Schedule a call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;