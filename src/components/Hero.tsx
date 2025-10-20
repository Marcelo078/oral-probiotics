import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/prodentim-hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <CheckCircle className="h-4 w-4" />
                Clinically Researched Formula
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              ProDentim
              <span className="block text-primary mt-2">Advanced Oral Probiotics</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              A unique blend of 3.5 billion probiotic strains and nutrients backed by clinical research, specially designed for optimal teeth and gum health.
            </p>
            
            <div className="space-y-4">
              <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Supports healthy teeth and gums</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Promotes long-lasting fresh breath</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Enhances ear, nose, and throat immune health</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                variant="cta" 
                size="xl"
                className="group"
              >
                <a href="https://6d59d9cb4yk93u1iuig4rrj78n.hop.clickbank.net" target="_blank" rel="noopener noreferrer">
                  👉 Get ProDentim Now
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              ⭐⭐⭐⭐⭐ Trusted by thousands of satisfied customers worldwide
            </p>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
              <img
                src={heroImage}
                alt="ProDentim Advanced Oral Probiotics - 3.5 billion probiotic strains for healthy teeth and gums"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
