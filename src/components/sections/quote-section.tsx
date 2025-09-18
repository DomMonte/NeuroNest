import React from 'react';

const TopLeftCurve = () => (
  <svg
    className="absolute top-0 left-0 w-1/2 max-w-[280px] sm:max-w-[341px]"
    viewBox="0 0 341 281"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 281C102.833 226.5 259.2 119.7 341 0H0V281Z"
      fill="var(--accent)"
    />
  </svg>
);

const BottomRightCurve = () => (
  <svg
    className="absolute bottom-0 right-0 w-1/2 max-w-[280px] sm:max-w-[341px]"
    viewBox="0 0 341 281"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M341 0C238.167 54.5 81.8 161.3 0 281H341V0Z"
      fill="var(--accent)"
    />
  </svg>
);

const QuoteSection = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden py-20 sm:py-24 md:py-28">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <TopLeftCurve />
        <BottomRightCurve />
      </div>

      <span
        className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 sm:-translate-y-1/3 text-white/10 font-sans font-bold text-[16rem] sm:text-[20rem] lg:text-[24rem] leading-none pointer-events-none"
        aria-hidden="true"
      >
        “
      </span>
      <span
        className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 sm:translate-y-1/3 text-white/10 font-sans font-bold text-[16rem] sm:text-[20rem] lg:text-[24rem] leading-none pointer-events-none"
        aria-hidden="true"
      >
        ”
      </span>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <blockquote className="text-2xl sm:text-3xl font-bold max-w-4xl mx-auto leading-snug">
          It is not our differences that divide us. It is our inability to recognise, accept, and celebrate those differences.
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;