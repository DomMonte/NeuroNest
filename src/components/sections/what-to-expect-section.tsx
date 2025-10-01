import React from 'react';

const WhatToExpectSection = () => {
    return (
        <section className="bg-white py-20 px-5">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-20">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h2 className="text-primary font-bold text-4xl leading-tight">What to expect</h2>
                        <p className="text-muted-foreground">
                            At Solasta, we understand that organising an assessment can feel overwhelming especially if you’re unsure what to expect.
                        </p>
                        <p className="text-muted-foreground">
                            That’s why we take a calm, supportive approach and guide you through each step of the process.
                        </p>
                        <p className="text-muted-foreground">
                            Our educational assessment process typically includes the following steps:
                        </p>
                        <div className="space-y-3">
                            <p><strong className="text-foreground font-semibold">1. Review of background information</strong></p>
                            <p className="text-muted-foreground">
                                Before your child or young person’s first appointment, we’ll ask you to complete a history questionnaire and provide copies of any relevant school or medical reports. This helps us get a comprehensive picture of your child’s development and any concerns you may have.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <p><strong className="text-foreground font-semibold">2. Initial consultation / parent interview</strong></p>
                            <p className="text-muted-foreground">
                                This is where we meet with you to discuss your concerns in detail, gather more information about your child’s history, and explain the assessment process. It’s a chance for us to understand your goals and for you to ask any questions you have.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="mt-8 lg:mt-0 space-y-6">
                        <div className="space-y-3">
                          <p><strong className="text-foreground font-semibold">3. Assessment</strong></p>
                          <p className="text-muted-foreground">
                              This is where we work directly with your child or young person. The assessment usually takes place over 2-4 sessions, each lasting around 1-2 hours, depending on your child’s age and needs. We use a range of engaging, evidence-based tools and activities to explore their thinking, learning, attention, social-emotional, and everyday skills. We work at your child’s pace, with plenty of breaks to make sure they feel comfortable and supported.
                          </p>
                        </div>
                        <div className="space-y-3">
                            <p><strong className="text-foreground font-semibold">4. Feedback session</strong></p>
                            <p className="text-muted-foreground">
                                This session is for you as parents or caregivers. We’ll meet to discuss the assessment results, explain what they mean, and provide practical, easy-to-understand recommendations. You’ll have plenty of opportunity to ask questions so that you can leave feeling clear and confident about the next steps.
                            </p>
                        </div>
                        <div className="space-y-3">
                           <p><strong className="text-foreground font-semibold">5. Comprehensive report</strong></p>
                            <p className="text-muted-foreground">
                                Following the feedback session, you’ll receive a detailed written report outlining the assessment findings, diagnoses (if applicable), and personalised recommendations. This report can be shared with your child’s school, paediatrician, or other professionals to help them understand and support your child’s needs.
                            </p>
                        </div>
                        <div className="pt-4">
                            <a 
                                href="https://solasta.net.au/faq-educational-assessments/"
                                className="inline-block bg-primary text-primary-foreground font-medium rounded-[25px] py-[15px] px-[30px] shadow-[0_4px_12px_rgba(255,87,87,0.3)] hover:bg-accent transition-colors"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatToExpectSection;