import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* Company info - spans 2 columns on larger screens */}
          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">Programmatic</h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto md:mx-0">
              Streamlining workflows through intelligent automation solutions.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="text-center md:text-left">
            <FooterColumn title="Resources">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Projects</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</Link>
            </FooterColumn>
          </div>

          {/* Contact info */}
          <div className="text-center md:text-left">
            <FooterColumn title="Contact">
              <p className="text-gray-600 text-sm">Email: alexandru@techliberate.com</p>
              <p className="text-gray-600 text-sm">Phone: (000) 000-0000</p>
              <p className="text-gray-600 text-sm">123 Automation St, Suite 100</p>
              <p className="text-gray-600 text-sm">San Francisco, CA 94107</p>
            </FooterColumn>
          </div>
        </div>

        {/* Copyright and bottom row */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Programmatic. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 flex space-x-6 justify-center">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-xs transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-700 text-xs transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{title}</h4>
      <div className="space-y-2 flex flex-col">{children}</div>
    </div>
  );
};

export default Footer;