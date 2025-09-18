import React from 'react';
import Image from 'next/image';

const processSteps = [
  {
    step: "1",
    title: "Book Your Spot",
    description: "Read through our website and contact us to set session dates and times. No referral from a GP is needed to book an educational assessment in Adelaide."
  },
  {
    step: "2", 
    title: "Information Gathering",
    description: "We conduct a parent interview, questionnaires, school reports, and teacher feedback to build a full picture of your child's learning and behaviour."
  },
  {
    step: "3",
    title: "Assessment Session", 
    description: "Your child attends a one-on-one session (around 2 hours). This may include cognitive testing, academic assessments, and engaging activities tailored to their age and needs."
  },
  {
    step: "4",
    title: "School Observation (Optional)",
    description: "We can also visit your child at school to observe and assess them in their natural learning environment for the most accurate overview."
  },
  {
    step: "5",
    title: "Scoring and Analysis",
    description: "All results are carefully scored and interpreted using evidence-based tools."
  },
  {
    step: "6", 
    title: "Feedback Session",
    description: "You attend a dedicated feedback appointment (around 60 minutes) where we explain the results clearly, answer questions, and outline recommendations."
  },
  {
    step: "7",
    title: "Comprehensive Report",
    description: "You receive a detailed written report with practical strategies to support your child at home, school, and in other settings."
  }
];

const assessmentTools = [
  {
    ageRange: "Ages 4–7 years",
    tool: "Wechsler Preschool and Primary Scale of Intelligence (WPPSI)"
  },
  {
    ageRange: "Ages 6–16 years", 
    tool: "Wechsler Intelligence Scale for Children (WISC)"
  },
  {
    ageRange: "Academic Achievement (all ages)",
    tool: "Wechsler Individual Achievement Test (WIAT)"
  }
];

const additionalTests = [
  "Behavioural and Adaptive measures using the Conners-4 Rating Scale",
  "Adaptive Behaviour Assessment System third addition (ABAS-3) for concerns regarding intellectual disability",
  "Comprehensive Test of Phonological Processing Second edition (CTOPP-2), assessing phonological awareness, phonological memory, and verbal fluency/rapid naming",
  "Behaviour Assessment System for Children, Third Edition (BASC III)"
];

const AssessmentProcessSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Assessment Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            Our Assessment Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            At Neuronest Psychology, we provide comprehensive assessments to help you better understand your child's learning, thinking, and cognitive strengths. These assessments are suitable for children aged 4–16 years and use gold-standard tools tailored to their age.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Boy writing on printer paper near girl"
              width={800}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[300px]"
            />
          </div>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-secondary rounded-lg p-6 shadow-sm border-t-4 border-[#5f7362]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#5f7362] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
                    {step.step}
                  </div>
                  <h3 className="text-[#5f7362] font-bold text-lg">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment Tools */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-primary text-2xl font-bold mb-6">Assessment Tools</h3>
            <div className="space-y-4">
              {assessmentTools.map((tool, index) => (
                <div key={index} className="bg-secondary rounded-lg p-4 border-l-4 border-[#5f7362]">
                  <div className="font-semibold text-[#5f7362] mb-1">{tool.ageRange}</div>
                  <div className="text-muted-foreground text-sm">{tool.tool}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-primary text-2xl font-bold mb-6">Additional Tests</h3>
            <div className="text-muted-foreground text-sm leading-relaxed">
              <p className="mb-4">Other additional tests that may be administered depending on your child's needs:</p>
              <ul className="space-y-2">
                {additionalTests.map((test, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#5f7362] mr-2 mt-1">•</span>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-secondary rounded-lg p-6 lg:p-8 border-t-4 border-[#5f7362]">
          <div className="text-center">
            <h3 className="text-[#5f7362] text-xl font-bold mb-4">Session Details</h3>
            <p className="text-muted-foreground mb-4">
              Each assessment session with your child takes approximately 2 hours generally, depending on their age and ability. To ensure we get the most accurate picture, we also offer the option of school-based observation and assessment, allowing us to see how your child learns and interacts in their everyday classroom environment.
            </p>
            <p className="text-muted-foreground">
              After the assessment, parents or caregivers are invited to a separate feedback session where we explain the results clearly and answer any questions. You will also receive a comprehensive written report, including practical recommendations to support your child at home and school.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentProcessSection;
