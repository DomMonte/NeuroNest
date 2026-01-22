import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-12">
      <div className="container">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {/* Col 1: Logo & Tagline */}
          <div>
            <Link href="/" aria-label="Go to homepage" className="flex items-center gap-3 text-xl sm:text-2xl font-semibold tracking-tight text-white">
              <Image
                src="/NeuroNest Logo.png"
                alt="NeuroNest Logo"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10 rounded"
              />
              <span>Neuronest</span>
            </Link>
            <h2 className="mt-5 text-[26px] font-bold text-white leading-tight">
              Understanding each child to unlock their potential
            </h2>
            <Link 
              href="/contact-us"
              className="inline-block mt-6 bg-white text-primary font-medium py-3 px-6 rounded-full hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-3">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/#about" className="block text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/#assessments" className="block text-white/80 hover:text-white transition-colors">
                Assessments
              </Link>
              <Link href="/#faqs" className="block text-white/80 hover:text-white transition-colors">
                FAQs
              </Link>
              <Link href="/contact-us" className="block text-white/80 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-bold text-lg text-white mb-3">Contact Information</h3>
            <div className="space-y-3">
              <p className="text-base">
                <strong className="text-white mr-2 font-bold">Phone</strong>
                <a href="tel:+61404362115" className="text-white/80 hover:text-white transition-colors">
                  +61 404 362 115
                </a>
              </p>
              <p className="text-base">
                <strong className="text-white mr-2 font-bold">Email</strong>
                <a href="mailto:admin@neuronestadl.com.au" className="text-white/80 hover:text-white transition-colors">
                  admin@neuronestadl.com.au
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center">
            <p className="text-sm text-white/80">
              © 2024 NeuroNest Psychology. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;