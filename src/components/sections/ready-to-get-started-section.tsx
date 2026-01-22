import React from 'react';
import Link from 'next/link';

const ReadyToGetStartedSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
       {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[150%] bg-white rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[120%] bg-brand-yellow rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-6 py-24 sm:py-32 text-center flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready to get started?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
          Simply fill out our contact form and we'll be in touch to discuss your child's assessment needs.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 w-full max-w-lg border border-white/20">
          <p className="text-lg text-white mb-4">
            If you have any questions, we encourage you to contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-medium">
            <a href="tel:0416086366" className="text-white hover:text-brand-yellow transition-colors text-xl">
              0416 086 366
            </a>
            <span className="hidden sm:block text-white/40">|</span>
            <a href="mailto:daniela@neuronestadl.com.au" className="text-white hover:text-brand-yellow transition-colors text-xl">
              daniela@neuronestadl.com.au
            </a>
          </div>
        </div>

        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center bg-white text-primary font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:bg-brand-yellow hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};
export default ReadyToGetStartedSection;
