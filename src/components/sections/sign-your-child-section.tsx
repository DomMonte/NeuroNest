import Image from 'next/image';
import Link from 'next/link';

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex text-base leading-relaxed text-muted-foreground">
    <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
    <div>{children}</div>
  </li>
);

const SignYourChildSection = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
              Signs your child or young person may benefit from an assessment
            </h2>
            <div className="space-y-5 text-base text-muted-foreground">
              <p>
                It’s not always easy to know when to seek extra support, but if you’ve noticed that your child or teen is struggling, or if others have raised concerns, an educational assessment can be an important step in understanding what’s going on and how best to help.
              </p>
              <p>
                You might consider booking an assessment if your child or young person:
              </p>
            </div>

            <ul className="space-y-3 my-6">
              <ListItem>
                <strong className="font-semibold text-foreground">Is experiencing challenges with learning at school, or finding that it takes extra effort.</strong>
              </ListItem>
              <ListItem>
                Is progressing more slowly in some areas of learning, or finding certain subjects trickier.
              </ListItem>
              <ListItem>
                Lacks confidence, feels overwhelmed, or is losing enjoyment in school.
              </ListItem>
              <ListItem>
                <strong className="font-semibold text-foreground">Has trouble focusing, remembering instructions, or staying organised</strong> compared to their peers.
              </ListItem>
              <ListItem>
                <strong className="font-semibold text-foreground">Needs extra support at school</strong> and a formal assessment has been recommended.
              </ListItem>
              <ListItem>
                 <strong className="font-semibold text-foreground">Has been recommended for assessment</strong> by a teacher, GP, paediatrician, or other professional.
              </ListItem>
              <ListItem>
                <strong className="font-semibold text-foreground">Seems advanced for their age</strong> and you suspect they may be gifted.
              </ListItem>
            </ul>

            <p className="text-base text-muted-foreground mb-8">
              Whether you’re looking for answers, clarity, or just some guidance on how to best support your child or young person’s learning and development, we’re here to help.
            </p>

            <Link
              href="/contact-us"
              className="inline-block bg-primary text-primary-foreground font-medium py-3.5 px-8 rounded-full shadow-[0_4px_12px_rgba(255,87,87,0.3)] hover:bg-accent transition-colors text-base"
            >
              Request an appointment
            </Link>
          </div>

          {/* Right Column: Image */}
          <div className="w-full h-auto aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden rounded-[25px]">
            <Image
              src="https://solasta.net.au/wp-content/uploads/2022/02/Solasta23_292_web.jpg"
              alt="Signs your child or young person may benefit from an assessment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignYourChildSection;