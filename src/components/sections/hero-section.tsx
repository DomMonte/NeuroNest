import React from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const mainNavLinks = ["About Us", "Pricing", "FAQs", "Contact"];
  const idMap: Record<string, string> = { 'About Us': 'about', Pricing: 'pricing', FAQs: 'faqs', Contact: 'contact' };

  return (
    <section className="relative w-full bg-primary text-white h-screen flex flex-col">
      {/* Full-width header */}
      <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 flex items-center justify-between py-4 sm:py-5">
          <a href="#" className="flex items-center gap-3 text-xl sm:text-2xl font-semibold tracking-tight text-primary">
            <Image
              src="/NeuroNest Logo.png"
              alt="NeuroNest logo"
              width={40}
              height={40}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded"
              priority
            />
            <span>Neuronest</span>
          </a>
          <div className="flex items-center gap-x-6 sm:gap-x-8">
            {mainNavLinks.map((link) => (
              <a key={link} href={`#${idMap[link]}`} className="text-base font-medium capitalize text-primary hover:text-primary/80 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
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
              Understanding every child to unlock their potential.
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

      {/* Scroll down indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6">
        <a href="#about" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white hover:bg-white/10 transition-colors" aria-label="Scroll to content">
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}