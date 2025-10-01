import React from 'react';
import Link from 'next/link';

const ReadyToGetStartedSection = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-lg text-white mb-6">
          Simply fill out our contact form and we'll be in touch to discuss your child's assessment needs.
        </p>
        <p className="text-lg text-white mb-10">
          If you have any questions, we encourage you to contact us on{' '}
          <a href="tel:0416086366" className="font-bold hover:underline">
            0416 086 366
          </a>{' '}
          or{' '}
          <a href="mailto:daniela@neuronestadl.com.au" className="font-bold hover:underline">
            daniela@neuronestadl.com.au
          </a>
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-white text-primary font-medium text-base px-8 py-4 rounded-full shadow-lg hover:bg-white/90 transition-colors duration-300 ease-in-out"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};
export default ReadyToGetStartedSection;