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
    <main id="main" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      
      <div className="flex flex-col gap-24 sm:gap-32 pb-24">
        {/* About Us */}
        <section id="about" className="scroll-mt-24">
          <AboutUsSection />
        </section>
        
        {/* Services Overview */}
        <EducationalAssessmentsIntro />
        
        {/* Assessment Indicators */}
        <section id="assessments" className="scroll-mt-24">
          <AssessmentIndicatorsSection />
        </section>
        
        {/* ADHD Details */}
        <ADHDDetailsSection />
        
        {/* Assessment Process */}
        <AssessmentProcessSection />
        
        {/* Pricing */}
        <section id="pricing" className="scroll-mt-24">
          <PricingSection />
        </section>
        
        {/* FAQs */}
        <section id="faqs" className="scroll-mt-24">
          <FaqSection />
        </section>
        
        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <ReadyToGetStartedSection />
        </section>
      </div>
    </main>
  );
}
