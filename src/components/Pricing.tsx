import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import bottle1 from "@/assets/prodentim-strawberry.png";
import bottles3 from "@/assets/prodentim-3-bottles.png";
import bottles6 from "@/assets/prodentim-6-bottles.png";

const packages = [
  {
    bottles: 1,
    name: "Starter Pack",
    image: bottle1,
    popular: false,
    supply: "30-Day Supply",
    features: [
      "30 Soft Tablets",
      "Natural Strawberry Flavor",
      "3.5 Billion Probiotics per Tablet",
      "Free Shipping",
    ],
  },
  {
    bottles: 3,
    name: "Most Popular",
    image: bottles3,
    popular: true,
    supply: "90-Day Supply",
    features: [
      "90 Soft Tablets (3 Bottles)",
      "Natural Strawberry Flavor",
      "3.5 Billion Probiotics per Tablet",
      "Free Shipping + Bonuses",
      "Best Value per Bottle",
    ],
  },
  {
    bottles: 6,
    name: "Best Value",
    image: bottles6,
    popular: false,
    supply: "180-Day Supply",
    features: [
      "180 Soft Tablets (6 Bottles)",
      "Natural Strawberry Flavor",
      "3.5 Billion Probiotics per Tablet",
      "Free Shipping + Exclusive Bonuses",
      "Maximum Savings",
      "Guaranteed Results",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect supply to support your oral health journey. Greater savings with larger packages.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl ${
                pkg.popular
                  ? "border-accent bg-accent/5 shadow-xl scale-105"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1">
                  BEST VALUE ⭐
                </Badge>
              )}
              
              <div className="mb-6">
                <img
                  src={pkg.image}
                  alt={`ProDentim ${pkg.bottles} bottle package`}
                  className="w-full h-48 object-contain"
                  loading="lazy"
                />
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {pkg.supply}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                asChild
                variant={pkg.popular ? "cta" : "default"}
                size="lg"
                className="w-full"
              >
                <a href="https://6d59d9cb4yk93u1iuig4rrj78n.hop.clickbank.net" target="_blank" rel="noopener noreferrer">
                  Get {pkg.bottles} Bottle{pkg.bottles > 1 ? 's' : ''}
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            💯 60-Day Money-Back Guarantee • 🚚 Free Shipping • 🔒 Secure Checkout
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
