import { Target, Users, Lightbulb, Heart } from "lucide-react";
import InteractiveCard from "./InteractiveCard";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Research Excellence",
      description: "Conducting cutting-edge research in technology-enhanced learning across all educational levels.",
    },
    {
      icon: Users,
      title: "Mentoring & Training",
      description: "Providing mentoring support and organizing research seminars for researchers and students.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Developing solutions that address real societal challenges through educational technology applications.",
    },
    {
      icon: Heart,
      title: "External Collaboration",
      description: "Building and sustaining research partnerships with local and international organizations.",
    },
  ];

  return (
    <section className="py-12 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 hover:text-primary transition-colors duration-300 animate-fade-in">
            What Drives Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Our research focuses on creating meaningful impact through innovation, 
            collaboration, and community-centered solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
          {highlights.map((highlight, index) => (
            <InteractiveCard
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;