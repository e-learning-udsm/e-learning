import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            eLearning Research Group
            <span className="block text-accent animate-fade-in" style={{animationDelay: '0.2s'}}> (eLRG)</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-6 opacity-90 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Promoting multi-disciplinary research in technology-enhanced learning 
            at the University of Dar es Salaam
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-hero group">
              <Link to="/research">
                Explore Our Research
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg" className="hover:scale-105 transition-all duration-300">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;