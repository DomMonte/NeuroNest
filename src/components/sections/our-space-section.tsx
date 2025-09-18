"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const klemzigGallery = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/IMG_0014-768x512-16.jpg?", alt: "Klemzig reception area" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/IMG_0013-768x512-21.jpg?", alt: "Klemzig therapy room with seating" },
];

const klemzigTourImage = {
  src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/IMG_0014-768x512-16.jpg?",
  alt: "Klemzig virtual tour preview of the reception desk"
};

const christiesBeachGallery = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Solasta-CB-4-WEB-768x512-29.jpg?", alt: "Christies Beach reception desk" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Solasta-CB-20-WEB-768x512-23.jpg?", alt: "Christies Beach modern therapy space" },
];

const christiesBeachTourImage = {
  src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Solasta-CB-26-WEB-24.jpg?",
  alt: "Christies Beach virtual tour preview of a spacious room"
};

interface LocationProps {
  title: string;
  galleryImages: { src: string; alt: string }[];
  tourPreviewImage: { src: string; alt: string };
  tourButtonText: string;
}

const LocationSection: React.FC<LocationProps> = ({ title, galleryImages, tourPreviewImage, tourButtonText }) => (
  <div>
    <h3 className="text-3xl font-bold text-primary mb-10">{title}</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-start">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 w-full">
          <button aria-label="Previous image" className="flex-shrink-0 w-12 h-12 rounded-full border border-primary bg-white flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-grow flex justify-center gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white p-1.5 rounded-[25px] shadow-lg">
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-[20px] overflow-hidden">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 30vw, 144px" />
                </div>
              </div>
            ))}
          </div>
          <button aria-label="Next image" className="flex-shrink-0 w-12 h-12 rounded-full border border-primary bg-white flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <a href="#" className="inline-block mt-8 bg-primary text-primary-foreground rounded-[25px] py-4 px-10 text-base font-medium transition-transform hover:scale-105 shadow-[0_4px_12px_rgba(255,87,87,0.3)]">
          Show All
        </a>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="relative w-full aspect-video rounded-[25px] overflow-hidden shadow-lg">
          <Image src={tourPreviewImage.src} alt={tourPreviewImage.alt} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 550px" />
        </div>
        <a href="#" className="inline-block mt-8 bg-primary text-primary-foreground rounded-[25px] py-4 px-10 text-base font-medium transition-transform hover:scale-105 shadow-[0_4px_12px_rgba(255,87,87,0.3)]">
          {tourButtonText}
        </a>
      </div>
    </div>
  </div>
);

const OurSpaceSection = () => {
  return (
    <section id="our-space" className="bg-secondary py-20">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">Our space</h2>
          <div className="space-y-4 text-muted-foreground text-base">
            <p>Get a sense of what attending an appointment at Solasta would feel like.</p>
            <p>We offer a carefully designed, modern and inviting therapy space. Our spacious, light-filled rooms create an environment that allows for safety, privacy and growth. From the waiting room to your time in our therapy rooms, we have consciously created an enriched space to support your sense of comfort.</p>
            <p>For children, we also have rooms specifically designed to accommodate sensory needs, complete with toys, soft lighting and thoughtfully selected furnishings to create a calming environment.</p>
            <p>Explore the photos of our space below or check-out our virtual tour.</p>
          </div>
        </div>
        
        <div className="space-y-24">
          <LocationSection
            title="Klemzig"
            galleryImages={klemzigGallery}
            tourPreviewImage={klemzigTourImage}
            tourButtonText="Klemzig Virtual Tour"
          />
          <LocationSection
            title="Christies Beach"
            galleryImages={christiesBeachGallery}
            tourPreviewImage={christiesBeachTourImage}
            tourButtonText="Christies Beach Virtual Tour"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSpaceSection;