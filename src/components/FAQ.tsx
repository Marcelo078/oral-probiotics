import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is ProDentim?",
    answer: "ProDentim is an advanced oral probiotic supplement containing 3.5 billion beneficial bacterial strains specifically formulated to support dental and gum health. It comes in easy-to-use soft tablets with a natural strawberry flavor.",
  },
  {
    question: "How do I take ProDentim?",
    answer: "Simply chew one soft tablet each morning. Let it dissolve slowly in your mouth to allow the probiotics to colonize your oral cavity effectively. For best results, use consistently every day.",
  },
  {
    question: "Is ProDentim safe to use?",
    answer: "Yes, ProDentim is formulated with natural ingredients and beneficial probiotic strains that are generally recognized as safe. However, if you have specific health concerns or are taking medications, consult your healthcare provider before starting any new supplement.",
  },
  {
    question: "When will I see results?",
    answer: "Many users report noticing fresher breath within the first few days. For optimal results in gum health and overall oral wellness, consistent use for 60-90 days is recommended, as it takes time for the beneficial bacteria to establish themselves.",
  },
  {
    question: "Can I take ProDentim with other supplements?",
    answer: "ProDentim is generally safe to combine with other supplements. However, it's best to separate probiotic intake from antibiotics by at least 2 hours, as antibiotics can interfere with beneficial bacteria.",
  },
  {
    question: "What is your return policy?",
    answer: "ProDentim comes with a 60-day money-back guarantee. If you're not completely satisfied with your purchase for any reason, you can request a full refund within 60 days of your purchase date.",
  },
  {
    question: "How should I store ProDentim?",
    answer: "Store ProDentim in a cool, dry place away from direct sunlight. Keep the bottle tightly closed to maintain the potency of the probiotic strains. No refrigeration is required.",
  },
  {
    question: "Why are probiotics important for oral health?",
    answer: "Your mouth has its own microbiome, just like your gut. Beneficial probiotics help maintain a healthy balance of bacteria in your mouth, which supports healthy teeth and gums, fresh breath, and may even benefit your ear, nose, and throat health.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about ProDentim and oral probiotics.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
