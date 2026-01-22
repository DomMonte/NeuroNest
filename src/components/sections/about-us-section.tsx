import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute -inset-4 bg-secondary rounded-[2rem] -z-10 rotate-3"></div>
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Girl sitting while reading book"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              About <span className="text-primary">Neuronest Psychology</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p className="text-xl font-medium text-foreground">
                Welcome to Neuronest Psychology.
              </p>
              
              <p>
                At Neuronest Psychology, we believe every child has the potential to succeed when the right supports are in place. Our role is to uncover how each child learns, thinks, and engages with the world through a range of comprehensive assessments.
              </p>
              
              <p>
                We specialise in cognitive, psycho-educational, ADHD, and giftedness assessments. These assessments provide a clear understanding of your child's strengths, challenges, and learning style. By combining detailed testing with input from families, schools, and (where appropriate) classroom observations, we create a complete picture of your child's unique learning profile.
              </p>
              
              <p>
                With this knowledge, we provide families and educators with practical, evidence-based recommendations to guide tailored support. This ensures your child is not only better understood but also better equipped to reach their full potential and thrive at school, at home, and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
