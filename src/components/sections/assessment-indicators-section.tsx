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
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Does my child need an <span className="text-primary">assessment?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sometimes it can be difficult to know whether your child's challenges (or strengths) are part of typical development, or whether they would benefit from a formal assessment. Below are some common signs for each type of assessment we offer:
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1637195140076-31e92f35c256?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A young child is doing something on a piece of paper"
              width={800}
              height={400}
              className="rounded-2xl shadow-xl object-cover w-full h-[350px] sm:h-[400px]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {assessmentIndicators.map((assessment, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 sm:p-10 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                {assessment.title}
              </h3>
              <p className="text-muted-foreground font-medium mb-6">
                {assessment.subtitle}
              </p>
              
              <ul className="space-y-4 mb-8">
                {assessment.indicators.map((indicator, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{indicator}</span>
                  </li>
                ))}
              </ul>
              
              {assessment.note && (
                <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {assessment.note}
                  </p>
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
