"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const mainNavLinks = ["About Us", "Assessments", "FAQs", "Contact"];
  const linkMap: Record<string, string> = { 
    'About Us': '#about', 
    Assessments: '#assessments', 
    FAQs: '#faqs', 
    Contact: '#contact' 
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-secondary/50 to-background min-h-[90vh] flex flex-col">
      {/* Full-width header */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/NeuroNest Logo.png"
              alt="NeuroNest logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg group-hover:scale-105 transition-transform"
              priority
            />
            <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">Neuronest</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-8">
            {mainNavLinks.map((link) => (
              <Link key={link} href={linkMap[link]} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col p-4 space-y-2">
              {mainNavLinks.map((link) => (
                <Link
                  key={link}
                  href={linkMap[link]}
                  className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="block w-full text-center px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero body */}
      <div className="flex-1 flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-3xl space-y-8 order-2 lg:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                <span className="block text-primary">Neuronest</span>
                <span className="block">Psychology</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Understanding each child to unlock their potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#contact" 
                  className="px-8 py-4 bg-primary text-white text-base font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book an Appointment
                </Link>
                <Link 
                  href="#about" 
                  className="px-8 py-4 bg-white text-foreground border border-border text-base font-semibold rounded-full hover:bg-secondary/50 transition-all shadow-sm hover:shadow-md"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-brand-yellow/20 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 blur-xl opacity-60"></div>
              <Image
                src="/IMG_3590.jpeg"
                alt="Neuronest Psychology"
                width={600}
                height={400}
                className="rounded-[2rem] shadow-2xl object-cover w-full h-[400px] lg:h-[500px] hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
