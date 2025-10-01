"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const mainNavLinks = ["About Us", "Assessments", "FAQs", "Contact"];
  const linkMap: Record<string, string> = { 
    'About Us': '#about', 
    Assessments: '#assessments', 
    FAQs: '#faqs', 
    Contact: '/contact-us' 
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="relative w-full bg-primary text-white h-[calc(100vh-80px)] flex flex-col">
      {/* Full-width header */}
      <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 flex items-center justify-between py-4 sm:py-5">
          <Link href="/" className="flex items-center gap-3 text-xl sm:text-2xl font-semibold tracking-tight text-primary">
            <Image
              src="/NeuroNest Logo.png"
              alt="NeuroNest logo"
              width={40}
              height={40}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded"
              priority
            />
            <span>Neuronest</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-6 sm:gap-x-8">
            {mainNavLinks.map((link) => (
              <Link key={link} href={linkMap[link]} className="text-base font-medium capitalize text-primary hover:text-primary/80 transition-colors">
                {link}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {mainNavLinks.map((link) => (
                <Link
                  key={link}
                  href={linkMap[link]}
                  className="block px-3 py-2 text-base font-medium text-primary hover:text-primary/80 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero body - vertically centered */}
      <div className="flex-1 flex items-center">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] text-white">
                <span className="block">Neuronest</span>
                <span className="block">Psychology</span>
              </h1>
              <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl max-w-2xl">
              Understanding each child to unlock their potential.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/IMG_3590.jpeg"
                alt="Neuronest Psychology"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}