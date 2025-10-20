import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Take Daily",
    description: "Simply chew one soft tablet each morning to support your oral health naturally.",
  },
  {
    number: "02",
    title: "Probiotics Work",
    description: "3.5 billion beneficial bacteria colonize your mouth, supporting healthy teeth and gums.",
  },
  {
    number: "03",
    title: "Experience Results",
    description: "Notice fresher breath, healthier gums, and improved overall oral wellness.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How Does ProDentim Work?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple daily routine for powerful results in your oral health journey.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary/20"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            asChild
            variant="cta" 
            size="xl"
          >
            <a href="https://6d59d9cb4yk93u1iuig4rrj78n.hop.clickbank.net" target="_blank" rel="noopener noreferrer">
              Start Your Journey Today
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
