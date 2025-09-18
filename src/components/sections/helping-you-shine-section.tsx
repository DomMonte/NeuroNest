import Image from 'next/image';
import { Sparkles } from 'lucide-react';

const HelpingYouShineSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start">
            <Sparkles className="w-16 h-16 text-brand-yellow" strokeWidth={1.5} />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-6 text-center md:text-left">
              Helping you shine
              <br />
              your brightest
            </h2>
            <div className="mt-8 w-full max-w-[480px] aspect-square relative mx-auto md:mx-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Solasta23_286_web-1.jpg?"
                alt="A professional helping a child with activities at a table in a bright, friendly room"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="text-center md:text-left">
            <h3 className="text-primary text-3xl lg:text-4xl font-bold">
              Our approach
            </h3>
            <div className="mt-6 space-y-4 text-muted-foreground text-base leading-relaxed">
              <p className="text-justify">
                At Solasta, we take a warm, collaborative, and evidence-based
                approach to all assessments.
              </p>
              <p className="text-justify">
                We are guided by our values of compassion, integrity, and
                respect, and we work in partnership with children and families to
                ensure they feel heard, listened to, respected, and supported.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpingYouShineSection;