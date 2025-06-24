'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 1. IMPORT LINK COMPONENT

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

  // Function to close mobile menu, useful for when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-800 hover:text-purple transition-colors duration-200 cursor-pointer relative group">
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="text-gray-800 hover:text-purple transition-colors duration-200 cursor-pointer relative group">
            Benefits
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#pricing" className="text-gray-800 hover:text-purple transition-colors duration-200 cursor-pointer relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* 2. DESKTOP BUTTON EDITED */}
          <Link
            href="/contact"
            className="bg-blue-100 text-black-100 font-medium py-2 px-4 rounded-full hover:bg-blue-100/90 transition transform hover:scale-105 active:scale-95 duration-200 shadow-lg hover:shadow-blue-100/50"
          >
            Schedule a call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span className={`block h-0.5 bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
              <span className={`block h-0.5 bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
        <div className="flex flex-col items-center space-y-6 px-6">
          <a href="#" onClick={closeMobileMenu} className="text-gray-800 hover:text-purple transition-colors duration-200 w-full text-center py-2 border-b border-gray-200">
            Work
          </a>
          <a href="#services" onClick={closeMobileMenu} className="text-gray-800 hover:text-purple transition-colors duration-200 w-full text-center py-2 border-b border-gray-200">
            Benefits
          </a>
          <a href="#pricing" onClick={closeMobileMenu} className="text-gray-800 hover:text-purple transition-colors duration-200 w-full text-center py-2">
            Pricing
          </a>
          {/* 3. MOBILE BUTTON EDITED */}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="bg-blue-100 text-black-100 font-medium py-3 px-6 rounded-full hover:bg-blue-100/90 transition w-full max-w-xs mt-4 text-center"
          >
            Schedule a call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;