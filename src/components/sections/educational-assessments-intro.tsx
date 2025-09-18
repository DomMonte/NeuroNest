import Link from 'next/link';

const assessmentTypes = [
  {
    title: "Cognitive Assessment",
    description: "Cognitive assessments measure how a child learns, thinks, and processes information. They explore areas such as verbal comprehension, reasoning, visual–spatial ability, memory, and processing speed. These assessments can provide information about a child's overall intellectual ability (IQ) and help identify strengths and challenges that may affect learning.",
  },
  {
    title: "Psycho-Educational Assessment",
    description: "A psycho-educational assessment combines a cognitive assessment with direct testing of academic skills such as reading, writing, and mathematics. Information is also gathered from parents and teachers to understand your child's learning in different settings. These assessments can help identify Specific Learning Disorders (such as Dyslexia, Dyscalculia, or Dysgraphia).",
  },
  {
    title: "ADHD Assessment",
    description: "ADHD assessments provide a clear understanding of whether attention difficulties are impacting your child's learning and behaviour. ADHD is a neurological condition that affects around 5% of children and can influence concentration, behaviour at home and school, friendships, and self-esteem.",
  },
  {
    title: "Giftedness Assessment",
    description: "Giftedness assessments identify children who demonstrate advanced abilities in areas such as reasoning, problem-solving, creativity, or academic achievement. These assessments explore cognitive strengths and may also include academic testing to provide a full picture of your child's potential.",
  },
];

const EducationalAssessmentsIntro = () => {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Types of Assessments Offered
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                Our comprehensive assessments use evidence-based tools and methods to evaluate your child's unique learning profile across multiple domains.
              </p>
              <p>
                Each assessment is tailored to your child's specific needs and includes detailed analysis, clear explanations, and practical recommendations for home and school environments.
              </p>
            </div>
          </div>
        </div>

        {/* Assessment Types Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {assessmentTypes.map((assessment, index) => (
            <div key={index} className="bg-white rounded-lg p-6 lg:p-8 border-t-4 border-[#5f7362] shadow-sm">
              <h3 className="text-[#5f7362] font-bold text-xl mb-4">{assessment.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{assessment.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            We work collaboratively with families and educators to ensure our insights translate into meaningful support strategies that help your child thrive.
          </p>
          <Link
            href="https://solasta.net.au/appointments-and-referrals/"
            className="inline-block bg-[#5f7362] text-white rounded-[25px] font-medium px-8 py-[15px] text-base shadow-[0_4px_12px_rgba(95,115,98,0.3)] hover:bg-[#5f7362]/90 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Request an appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationalAssessmentsIntro;