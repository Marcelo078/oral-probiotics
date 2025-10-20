import { useEffect } from "react";

const SEOHead = () => {
  useEffect(() => {
    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic SEO
    document.title = "ProDentim: Advanced Oral Probiotics for Healthy Teeth & Gums";
    updateMetaTag("description", "ProDentim contains 3.5 billion probiotic strains to support healthy teeth, gums, and fresh breath. Clinically researched oral health supplement with natural ingredients.");
    updateMetaTag("keywords", "ProDentim, oral probiotics, dental health, healthy teeth, healthy gums, fresh breath, probiotic supplement, teeth health, gum health, oral microbiome");
    
    // Open Graph
    updateMetaTag("og:title", "ProDentim: Advanced Oral Probiotics for Dental Health", true);
    updateMetaTag("og:description", "Support your oral health naturally with 3.5 billion probiotic strains. Clinically researched formula for healthy teeth, gums, and fresh breath.", true);
    updateMetaTag("og:type", "product", true);
    updateMetaTag("og:url", window.location.href, true);
    
    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", "ProDentim: Advanced Oral Probiotics for Dental Health");
    updateMetaTag("twitter:description", "Support your oral health naturally with 3.5 billion probiotic strains. Clinically researched formula.");

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "ProDentim Advanced Oral Probiotics",
      "description": "A unique blend of 3.5 billion probiotic strains and nutrients backed by clinical research, specially designed for optimal teeth and gum health.",
      "brand": {
        "@type": "Brand",
        "name": "ProDentim"
      },
      "category": "Health & Wellness > Oral Health",
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "12847"
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // FAQ Structured Data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What exactly is ProDentim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ProDentim is an advanced oral probiotic supplement containing 3.5 billion beneficial bacterial strains specifically formulated to support dental and gum health."
          }
        },
        {
          "@type": "Question",
          "name": "How do I take ProDentim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply chew one soft tablet each morning. Let it dissolve slowly in your mouth to allow the probiotics to colonize your oral cavity effectively."
          }
        },
        {
          "@type": "Question",
          "name": "When will I see results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many users report noticing fresher breath within the first few days. For optimal results in gum health, consistent use for 60-90 days is recommended."
          }
        }
      ]
    };

    const faqScript = document.createElement("script");
    faqScript.setAttribute("type", "application/ld+json");
    faqScript.textContent = JSON.stringify(faqData);
    document.head.appendChild(faqScript);

  }, []);

  return null;
};

export default SEOHead;
