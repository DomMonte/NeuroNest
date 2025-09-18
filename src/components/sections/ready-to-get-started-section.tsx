import React from 'react';
import Link from 'next/link';

const ReadyToGetStartedSection = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-lg text-white max-w-2xl mb-6">
          Simply fill-out our appointment request form and we’ll be in touch.
        </p>
        <p className="text-lg text-white mb-10">
          If you have any questions, we encourage you to contact the team on{' '}
          <a href="tel:1800943043" className="font-bold hover:underline">
            1800 943 043
          </a>{' '}
          or{' '}
          <a href="mailto:info@solasta.net.au" className="font-bold hover:underline">
            info@solasta.net.au
          </a>
        </p>
        <Link
          href="/appointments-and-referrals"
          className="inline-block bg-brand-yellow text-foreground font-medium text-base px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Request an appointment
        </Link>
      </div>
    </section>
  );
};

export default ReadyToGetStartedSection;