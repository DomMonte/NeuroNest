import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-white text-muted-foreground pt-20 pb-12">
      <div className="container">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Col 1: Logo & Tagline */}
          <div>
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/svgs/logo-2.svg?"
                alt="Solasta Logo"
                width={160}
                height={73}
                className="h-auto"
              />
            </Link>
            <h2 className="mt-5 text-[26px] font-bold text-foreground leading-tight">
              Shine your brightest
            </h2>
          </div>

          {/* Col 2: Klemzig */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-3">Klemzig</h3>
            <p className="text-base leading-relaxed">
              2/92-94 OG Road,
              <br />
              Klemzig SA 5087
            </p>
          </div>

          {/* Col 3: Christies Beach */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-3">Christies Beach</h3>
            <p className="text-base leading-relaxed">
              7/96-100 Dyson Road,
              <br />
              Christies Beach SA 5165
            </p>
          </div>

          {/* Col 4: Contact & ACNC */}
          <div>
            <div className="space-y-3">
              <p className="text-base">
                <strong className="text-foreground mr-2 font-bold">Phone</strong>
                <a href="tel:1800 943 043" className="hover:text-primary transition-colors">
                  1800 943 043
                </a>
              </p>
              <p className="text-base">
                <strong className="text-foreground mr-2 font-bold">Email</strong>
                <a href="mailto:info@solasta.net.au" className="hover:text-primary transition-colors">
                  info@solasta.net.au
                </a>
              </p>
            </div>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/ACNC-Registered-Charity-Logo_mono-30.png?"
              alt="ACNC Registered Charity Logo"
              width={192}
              height={41}
              className="mt-8"
            />
          </div>
        </div>

        {/* Sub-footer */}
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5 order-2 lg:order-1">
              <a href="https://www.facebook.com/solasta.net.au" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/solasta_health/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/solasta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            <div className="flex-1 text-center text-muted-foreground order-1 lg:order-2">
              <p className="text-xs leading-relaxed">
                © 2024 Solasta. All Rights Reserved. Solasta acknowledges the <a href="https://www.creativespirits.info/aboriginalculture/spirituality/what-is-the-dreaming-or-the-dreamtime" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Dreaming</a> as being the foundation of Aboriginal culture. We acknowledge the cultural authority of First Nations people and their right to care for their culture and country. Solasta is located on Kaurna country. We also recognise that our services are delivered across First Nations lands and waters throughout Australia. We pay our respects to elders past, present, and emerging.
              </p>
            </div>

            <div className="text-sm flex gap-6 order-3 lg:order-3">
              <Link href="/privacy-policy-2022-23/" className="whitespace-nowrap hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions/" className="whitespace-nowrap hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;