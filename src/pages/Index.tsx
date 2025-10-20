import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Summary from "@/components/Summary";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEOHead />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Summary />
      <FAQ />
      
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ProDentim. All rights reserved. This is an affiliate website.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Disclaimer: These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
