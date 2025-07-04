"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-[0_1px_0_#E1E3E6] w-full">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-[300px] py-4 flex justify-between items-center">
        {/* Logo or Home link */}
        <Link href="/" className="text-[#007580] font-inter font-medium text-sm uppercase">
          Home
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/Shop" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]">
            
          </Link>
          {/* Removed duplicate div and fixed case sensitivity in Pages link */}
          <Link href="/Product" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]">
          Sale  Product
          </Link>
          <Link href="/Pages" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]">
            Pages
          </Link>
          <Link href="/About" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]">
            About
          </Link>
           <Link href="/Contact" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]">
            Contact
          </Link>
         
          <div className="flex items-center gap-2">
            <span className="text-[#636270] font-inter font-normal text-sm uppercase">Call:</span>
            <span className="text-[#272343] font-inter font-medium text-sm uppercase">(808) 555-0111</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#272343]" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E1E3E6] px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link href="/Shop" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]" onClick={toggleMenu}>
              
            </Link>
            <Link href="/Product" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]" onClick={toggleMenu}>
            Sale Product
            </Link>
            <Link href="/Pages" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]" onClick={toggleMenu}>
              Pages
            </Link>
            <Link href="/About" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]" onClick={toggleMenu}>
              About
            </Link>
             <Link href="/Contact" className="text-[#636270] font-inter font-medium text-sm uppercase hover:text-[#007580]">
            Contact
          </Link>
            <div className="flex items-center gap-2">
              <span className="text-[#636270] font-inter font-normal text-sm uppercase">Call:</span>
              <span className="text-[#272343] font-inter font-medium text-sm uppercase">(808) 555-0111</span>
            </div>
          </div>
        </div>
      )}     
    </nav>
  );
}