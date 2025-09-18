import HeroSection from '@/components/sections/hero-section';
import AboutUsSection from '@/components/sections/about-us-section';
import EducationalAssessmentsIntro from '@/components/sections/educational-assessments-intro';
import AssessmentIndicatorsSection from '@/components/sections/assessment-indicators-section';
import ADHDDetailsSection from '@/components/sections/adhd-details-section';
import AssessmentProcessSection from '@/components/sections/assessment-process-section';
import PricingSection from '@/components/sections/pricing-section';
import ReadyToGetStartedSection from '@/components/sections/ready-to-get-started-section';
import FaqSection from '@/components/sections/faq-section';

export default function Page() {
  return (
    <main id="main" className="min-h-screen pt-16 sm:pt-20">
      <HeroSection />
      {/* About Us */}
      <section id="about">
        <AboutUsSection />
      </section>
      {/* Services Overview */}
      <EducationalAssessmentsIntro />
      {/* Assessment Indicators */}
      <AssessmentIndicatorsSection />
      {/* ADHD Details */}
      <ADHDDetailsSection />
      {/* Assessment Process */}
      <AssessmentProcessSection />
      {/* Pricing */}
      <section id="pricing">
        <PricingSection />
      </section>
      {/* FAQs */}
      <section id="faqs">
        <FaqSection />
      </section>
      {/* Contact */}
      <section id="contact">
        <ReadyToGetStartedSection />
      </section>
    </main>
  );
}