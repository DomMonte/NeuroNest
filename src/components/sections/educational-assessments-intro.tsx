import Link from 'next/link';
import Image from 'next/image';

const assessmentTypes = [
  {
    title: "Cognitive Assessment",
    description: "Cognitive assessments measure how a child learns, thinks, and processes information. They explore areas such as verbal comprehension, reasoning, visual–spatial ability, memory, and processing speed. These assessments can provide information about a child's overall intellectual ability (IQ) and help identify strengths and challenges that may affect learning.",
    image: "https://images.unsplash.com/photo-1565843248736-8c41e6db117b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Psycho-Educational Assessment",
    description: "A psycho-educational assessment combines a cognitive assessment with direct testing of academic skills such as reading, writing, and mathematics. Information is also gathered from parents and teachers to understand your child's learning in different settings. These assessments can help identify Specific Learning Disorders (such as Dyslexia, Dyscalculia, or Dysgraphia).",
    image: "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "ADHD Assessment",
    description: "ADHD assessments provide a clear understanding of whether attention difficulties are impacting your child's learning and behaviour. ADHD is a neurological condition that affects around 5% of children and can influence concentration, behaviour at home and school, friendships, and self-esteem.",
    image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Giftedness Assessment",
    description: "Giftedness assessments identify children who demonstrate advanced abilities in areas such as reasoning, problem-solving, creativity, or academic achievement. These assessments explore cognitive strengths and may also include academic testing to provide a full picture of your child's potential.",
    image: "https://images.unsplash.com/photo-1599689868384-59cb2b01bb21?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const EducationalAssessmentsIntro = () => {
  return (
    <section id="services" className="bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Types of <span className="text-primary">Assessments</span> Offered
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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {assessmentTypes.map((assessment, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <Image
                  src={assessment.image}
                  alt={`${assessment.title} - Child learning and assessment`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                  {assessment.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {assessment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8 text-xl font-medium max-w-2xl mx-auto">
            We work collaboratively with families and educators to ensure our insights translate into meaningful support strategies that help your child thrive.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full px-10 py-4 shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
          >
            Request an appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationalAssessmentsIntro;
