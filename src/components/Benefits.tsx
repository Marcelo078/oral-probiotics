import { Heart, Wind, Shield, Smile } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    title: "Healthy Teeth & Gums",
    description: "Supports the natural balance of your oral microbiome with beneficial probiotic strains that promote dental health.",
  },
  {
    icon: Wind,
    title: "Fresh Breath Confidence",
    description: "Experience long-lasting fresh breath throughout the day by targeting the root causes of bad breath naturally.",
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "Strengthens your body's natural defenses with probiotics that support ear, nose, and throat health.",
  },
  {
    icon: Heart,
    title: "Overall Wellness",
    description: "Contributes to your general well-being with a formula designed to work in harmony with your body.",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose ProDentim?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the science-backed benefits that make ProDentim the #1 choice for oral health support.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-xl hover:border-primary/50"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
