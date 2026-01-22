"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How long does the assessment take?",
    answer: "The assessment typically takes 2.5 to 3.5 hours to complete. Some assessments may take a bit longer if additional information is required. Breaks are provided and we recommend bringing snacks and a drink. After the assessment is completed, the report is completed as quickly as possible and is usually ready within 4 weeks. This report will include the results of the assessment, insights, and recommendations to support your child's learning and development.",
  },
  {
    question: "Do you observe children at school?",
    answer: "Yes. To get the most accurate overview, we can observe your child in their classroom environment. This often provides valuable insights into how they learn and interact in everyday settings.",
  },
  {
    question: "How Should I Prepare My Child for an Assessment?",
    answer: "To ensure we get the most accurate picture of your child's abilities, please keep the following in mind: Make sure your child is well-rested and feeling physically well on the day. If they take prescription medication, continue as usual. Ensure they have had something to eat and drink beforehand, and bring along snacks and water. If they use glasses or a hearing aid, please bring these with you. Provide any previous medical, school, or allied health reports in advance, as these give us valuable background information. Let us know about any sensory preferences or additional needs — we will do our best to accommodate these and make the session as comfortable as possible. Tip: Reassure your child that the assessment is not a 'test to pass or fail' but a chance for us to learn more about how they think and learn so we can help them succeed.",
  },
  {
    question: "What will I receive after the assessment?",
    answer: "You will receive: A detailed feedback session with the psychologist, a comprehensive written report with results and recommendations, and clear, practical recommendations to support your child at home and school.",
  },
  {
    question: "Will the assessment diagnose my child?",
    answer: "Assessments can identify Specific Learning Disorders (e.g., Dyslexia, Dyscalculia, Dysgraphia), ADHD, intellectual disability, or giftedness. Diagnoses are made in line with best-practice standards and only where criteria are clearly met.",
  },
  {
    question: "What is the cost of an assessment?",
    answer: "Costs vary depending on the type of assessment required. Please contact our reception team for a detailed fee schedule.",
  },
  {
    question: "Do schools accept your reports?",
    answer: "Yes. Our assessments are widely recognised by schools and can be used to access tailored learning supports, classroom adjustments, and funding (where applicable).",
  },
  {
    question: "What happens if my child has already had an assessment?",
    answer: "If a recent assessment has been completed, we may not need to repeat certain parts. However, if new concerns have emerged, we may recommend updated testing to ensure results are current.",
  },
  {
    question: "How do I book an assessment?",
    answer: "Simply contact our friendly team via phone, email or the <a href='/contact-us' class='text-primary hover:text-primary/80 underline font-semibold'>Contact Us page</a> to arrange a consultation and secure your booking.",
  },
  {
    question: "Do I need a referral?",
    answer: "No referral is needed to book an appointment with us. You can simply head to the booking section on our website to schedule your appointment.",
  },
  {
    question: "Will Medicare cover the appointment?",
    answer: "Unfortunately, Medicare does not cover educational or ADHD assessments. However, private health rebates may apply depending on your coverage. If you are on an NDIS plan, costs will vary depending on your provider.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "If you need to cancel your appointment, please note that deposits are non-refundable. If you need to reschedule, your deposit will carry over to the new booking.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-secondary/30 py-24 sm:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-6">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Find answers to common questions about our assessments, process, and what you can expect.
        </p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-card border border-border/50 rounded-xl px-6 py-2 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-4 [&>svg]:hidden w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="mr-4">{faq.question}</span>
                  <div className="text-primary transition-transform duration-200 shrink-0">
                    <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                    <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-6 text-muted-foreground text-base leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
