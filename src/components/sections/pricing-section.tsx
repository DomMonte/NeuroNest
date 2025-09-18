import React from 'react';

const pricingOptions = [
  {
    title: "Cognitive Assessment",
    price: "$900",
    includes: [
      "Cognitive (IQ) testing",
      "Scoring and analysis", 
      "Feedback session",
      "Full report"
    ]
  },
  {
    title: "Psycho-Educational Assessment", 
    price: "$1,250",
    includes: [
      "Cognitive (IQ) testing",
      "Academic achievement testing",
      "Parent/teacher questionnaires",
      "Scoring",
      "Feedback session", 
      "Full report"
    ]
  },
  {
    title: "ADHD Assessment",
    price: "$1,500", 
    includes: [
      "Diagnostic interview",
      "Behavioural rating scales (parents & teachers)",
      "Observation",
      "Cognitive and academic testing",
      "Conners CPT-3 (where appropriate)",
      "Feedback session",
      "Full report"
    ]
  },
  {
    title: "Giftedness Assessment",
    price: "$800",
    includes: [
      "Cognitive (IQ) testing", 
      "Optional academic testing",
      "Feedback session",
      "Full report with recommendations for enrichment and school planning"
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            Assessment Fees
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our comprehensive assessments are competitively priced and include all testing, analysis, feedback sessions, and detailed reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg p-6 lg:p-8 h-full flex flex-col border-t-4 border-[#5f7362] shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-[#5f7362] text-xl font-bold mb-2">{option.title}</h3>
                <div className="text-2xl font-bold text-[#5f7362]">{option.price}</div>
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-muted-foreground mb-3">Includes:</h4>
                <ul className="space-y-2">
                  {option.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-[#5f7362] mr-2 mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 lg:p-8 border-t-4 border-[#5f7362] shadow-sm">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-[#5f7362] mb-2">Medicare Coverage</h4>
              <p className="text-sm text-muted-foreground">Unfortunately, Medicare does not cover educational or ADHD assessments. However, private health rebates may apply depending on your coverage.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#5f7362] mb-2">NDIS Funding</h4>
              <p className="text-sm text-muted-foreground">If you are on an NDIS plan, costs will vary depending on your provider. Please contact us to discuss your specific situation.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#5f7362] mb-2">Cancellation Policy</h4>
              <p className="text-sm text-muted-foreground">If you need to cancel your appointment, please note that deposits are non-refundable. If you need to reschedule, your deposit will carry over to the new booking.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
