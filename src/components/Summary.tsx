import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Summary = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              ProDentim: Your Complete Oral Health Solution
            </h2>
          </div>
          
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-xl mb-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Product Summary</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                ProDentim represents a breakthrough in oral health supplementation. This innovative formula combines 3.5 billion colony-forming units (CFU) of carefully selected probiotic strains with supporting nutrients, all designed to promote optimal dental wellness from the inside out.
              </p>
              
              <h4 className="text-xl font-semibold text-foreground mb-3">What Makes ProDentim Unique?</h4>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unlike traditional oral care products that use harsh chemicals, ProDentim works with your body's natural processes. The beneficial bacteria in each soft tablet help balance your oral microbiome, addressing the root causes of dental issues rather than just masking symptoms.
              </p>
              
              <h4 className="text-xl font-semibold text-foreground mb-3">Key Benefits:</h4>
              
              <ul className="space-y-2 mb-4 text-muted-foreground">
                <li>✓ Supports naturally healthy teeth and gums</li>
                <li>✓ Promotes fresh breath that lasts all day</li>
                <li>✓ Helps maintain a balanced oral microbiome</li>
                <li>✓ Supports ear, nose, and throat health</li>
                <li>✓ Easy to use with delicious strawberry flavor</li>
                <li>✓ Backed by clinical research</li>
              </ul>
              
              <h4 className="text-xl font-semibold text-foreground mb-3">Who Should Use ProDentim?</h4>
              
              <p className="text-muted-foreground leading-relaxed">
                ProDentim is ideal for anyone looking to support their oral health naturally. Whether you're dealing with occasional bad breath, want to maintain healthy gums, or simply want to add an extra layer of protection to your dental care routine, ProDentim offers a science-backed solution that's both effective and convenient.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="cta" 
              size="xl"
              className="mb-4"
            >
              <a href="https://6d59d9cb4yk93u1iuig4rrj78n.hop.clickbank.net" target="_blank" rel="noopener noreferrer">
                👉 Try ProDentim Risk-Free Today
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              60-Day Money-Back Guarantee • Free Shipping on All Orders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
