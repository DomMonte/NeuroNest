import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-8">
            About Neuronest Psychology
          </h2>
        </div>
        
        <div className="bg-[#5f7362]/5 rounded-lg p-8 lg:p-12 border-l-4 border-[#5f7362]">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p className="text-xl font-medium text-[#5f7362] mb-6">
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
    </section>
  );
};

export default AboutUsSection;
