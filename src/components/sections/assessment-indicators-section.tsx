import React from 'react';
import Image from 'next/image';

const assessmentIndicators = [
  {
    title: "Cognitive Assessment",
    subtitle: "May be helpful if your child:",
    indicators: [
      "Struggles to keep up with learning despite trying hard",
      "Has difficulty with memory, problem-solving, or following instructions",
      "Works more slowly than peers",
      "Late speech development",
      "Limited vocabulary growth",
      "Trouble learning basics",
      "Shows uneven development (strong in some areas, weak in others)"
    ],
    note: "If this is the case your child may be suffering from global developmental delay or an intellectual disability, or other concerns such as speech and language delays."
  },
  {
    title: "Psycho-Educational Assessment",
    subtitle: "May be helpful if your child:",
    indicators: [
      "Has ongoing difficulties with reading (indication of dyslexia), writing, or maths (indication of dyscalculia)",
      "Appearing intelligent but has difficulty putting their thoughts on paper",
      "Avoids or becomes frustrated with schoolwork",
      "Makes frequent errors with spelling, reading, or number concepts",
      "Shows a gap between their ability and classroom performance",
      "A teacher has informed you that a psycho-educational assessment is required to assist in the development of an individualised education plan"
    ],
    note: "If this is the case your child may be suffering from a specific learning disorder such as dyslexia, dyscalculia or dysgraphia, or other concerns such as poor working memory and processing speed."
  },
  {
    title: "ADHD Assessment",
    subtitle: "May be helpful if your child:",
    indicators: [
      "Finds it hard to sit still, wait their turn, or stop interrupting",
      "Struggles to stay focused or finish tasks",
      "Is easily distracted or forgetful",
      "Is often impulsive or overly restless"
    ]
  },
  {
    title: "Giftedness Assessment",
    subtitle: "May be helpful if your child:",
    indicators: [
      "Learns quickly and grasps new concepts with ease",
      "Becomes bored or restless in class",
      "Shows advanced problem-solving, reasoning, or creativity",
      "Needs extra challenge or enrichment beyond their current level"
    ]
  }
];

const AssessmentIndicatorsSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            Does my child need an assessment?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Sometimes it can be difficult to know whether your child's challenges (or strengths) are part of typical development, or whether they would benefit from a formal assessment. Below are some common signs for each type of assessment we offer:
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1637195140076-31e92f35c256?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A young child is doing something on a piece of paper"
              width={800}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[300px]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {assessmentIndicators.map((assessment, index) => (
            <div key={index} className="bg-secondary rounded-lg p-6 lg:p-8 border-t-4 border-[#5f7362]">
              <h3 className="text-[#5f7362] text-xl font-bold mb-2">{assessment.title}</h3>
              <p className="text-muted-foreground font-medium mb-4">{assessment.subtitle}</p>
              
              <ul className="space-y-2 mb-4">
                {assessment.indicators.map((indicator, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#5f7362] mr-2 mt-1">•</span>
                    <span className="text-muted-foreground text-sm">{indicator}</span>
                  </li>
                ))}
              </ul>
              
              {assessment.note && (
                <div className="mt-4 p-3 bg-[#5f7362]/10 rounded border-l-4 border-[#5f7362]">
                  <p className="text-sm text-muted-foreground italic">{assessment.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentIndicatorsSection;
