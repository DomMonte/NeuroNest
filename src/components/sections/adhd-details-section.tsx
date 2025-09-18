import React from 'react';
import Image from 'next/image';

const adhdChallenges = [
  {
    title: "Inattention",
    description: "easily distracted, disorganised, wandering off task, difficulty sustaining focus"
  },
  {
    title: "Hyperactivity", 
    description: "excessive movement, fidgeting, or constant talking"
  },
  {
    title: "Impulsivity",
    description: "interrupting, acting without thinking, difficulty waiting their turn"
  }
];

const adhdAssessmentComponents = [
  "Cognitive assessment (WISC-V) to measure intellectual ability and rule out other concerns (e.g. intellectual disability, learning disorders)",
  "Academic assessment (WIAT-III) to evaluate achievement in reading, writing, and maths",
  "Behavioural rating scales (e.g. Conners-4, completed by parents and teachers) to gather information across home and school environments",
  "Parent interviews and observations to better understand your child's strengths and challenges"
];

const ADHDDetailsSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            Understanding ADHD Assessment
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            ADHD is a neurological condition that affects around 5% of children and can influence concentration, behaviour at home and school, friendships, and self-esteem.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Boys writing on book"
              width={800}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[300px]"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-primary text-2xl font-bold mb-6">Main Challenge Areas</h3>
            <p className="text-muted-foreground mb-6">
              Children with ADHD often experience challenges in three main areas:
            </p>
            <div className="space-y-4">
              {adhdChallenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-[#5f7362]">
                  <h4 className="font-bold text-[#5f7362] mb-2">{challenge.title}</h4>
                  <p className="text-muted-foreground text-sm">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-primary text-2xl font-bold mb-6">Assessment Process</h3>
            <p className="text-muted-foreground mb-6">
              This process involves gathering information from parents and teachers through questionnaires and interviews, as well as observing your child during an assessment session. A psycho-educational assessment is often included to explore attention, focus, and learning skills, and to rule out any underlying learning difficulties.
            </p>
            <p className="text-muted-foreground mb-6">
              A comprehensive ADHD evaluation will include:
            </p>
            <ul className="space-y-3">
              {adhdAssessmentComponents.map((component, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#5f7362] mr-2 mt-1">•</span>
                  <span className="text-muted-foreground text-sm">{component}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 lg:p-8 border-t-4 border-[#5f7362]">
          <h3 className="text-[#5f7362] text-xl font-bold mb-4 text-center">Assessment Outcomes</h3>
          <p className="text-muted-foreground text-center">
            This process allows us to determine the ADHD presentation type (inattentive, hyperactive/impulsive, or combined) and the severity of symptoms. By the end of the process, you will have an informed answer about ADHD and a detailed profile of your child's learning and attention strengths and needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ADHDDetailsSection;
