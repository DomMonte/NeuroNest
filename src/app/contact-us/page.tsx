import ContactUsSection from '@/components/sections/contact-us-section';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactUsSection />
    </main>
  );
}

export const metadata = {
  title: 'Contact Us - NeuroNest Psychology',
  description: 'Get in touch with NeuroNest Psychology for assessment inquiries and support.',
};
