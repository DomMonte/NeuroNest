"use client";

import * as React from "react";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// This component assumes the existence of a `cn` utility function in `@/lib/utils`
// for conditionally applying Tailwind CSS classes. Example:
//
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

const teamMembers = [
  {
    name: "Lisa Chisholm",
    title: "Clinical Psychologist / Director",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Lisa-Chisholm-7.jpg?",
    description: "Lisa is a Clinical Psychologist and the Director of Solasta. She has extensive experience supporting individuals across all age groups, including children, young people, and adults with mental health concerns, learning difficulties, and disabilities. Lisa has specific...",
    readMoreUrl: "#",
  },
  {
    name: "Stephanie Wood",
    title: "Psychologist",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Stephanie-Wood-6.jpg?",
    description: "Stephanie has experience working with children, adolescents and their families in both clinical and educational settings. Stephanie’s warm and encouraging approach focuses on building a relationship of trust, confidence and respect.",
    readMoreUrl: "#",
  },
  {
    name: "Nataly Veal",
    title: "Provisional Psychologist",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Nataly-Veal-4.jpg?",
    description: "Nataly is a Provisional Psychologist who has experience supporting individuals across all age groups, including children, young people, and adults with mental health concerns, learning difficulties, and disabilities. Nataly has specific...",
    readMoreUrl: "#",
  },
  {
    name: "Tara Mower",
    title: "Provisional Psychologist",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Tara-Mower-Mask-13.png?",
    description: "Tara has experience working with children and adolescents. She uses a warm and practical approach, working collaboratively to support young people in achieving their goals.",
    readMoreUrl: "#",
  },
  {
    name: "Madeline Rac",
    title: "Psychologist",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Madeline-Rac-mask-copy-10.png?",
    description: "Madeline is a registered psychologist supporting children, adolescents, and young adults. She is passionate about supporting the wellbeing and mental health of young people.",
    readMoreUrl: "#",
  },
  {
    name: "Peck-Jin Gan",
    title: "Psychologist",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Peck-Jin-Gan-12.png?",
    description: "Peck-Jin is a registered psychologist with a passion for supporting children, adolescents, and their families to thrive. She has experience working in various settings.",
    readMoreUrl: "#",
  },
  {
    name: "Shelley Wetton",
    title: "Psychologist",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c2c1991c-a294-4b89-bbd6-c1fcaa1e1b45-solasta-net-au/assets/images/Shelley-Wetton-250-x-250-11.png?",
    description: "Shelley is a registered psychologist who is passionate about supporting children, young people, and their families. She has experience in private practice and educational settings.",
    readMoreUrl: "#",
  },
];

const MeetTheTeamSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="bg-white py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">
          Our clinicians who provide educational assessments
        </h2>

        <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col items-center text-center px-4">
                  <Image
                    src={member.imageUrl}
                    alt={`Profile picture of ${member.name}`}
                    width={150}
                    height={150}
                    className="rounded-full object-cover w-[150px] h-[150px] mb-6"
                  />
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-foreground mt-1">{member.title}</p>
                  <p className="text-base text-muted-foreground mt-4 min-h-[160px]">
                    {member.description}
                  </p>
                  <a
                    href={member.readMoreUrl}
                    className="text-primary font-medium mt-4 pb-0.5 border-b border-primary hover:border-b-2 transition-all"
                  >
                    Read More
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center items-center gap-4 mt-12">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-3 w-3 rounded-full transition-colors duration-300",
                i === current ? "bg-foreground" : "bg-muted hover:bg-muted-foreground/50",
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;