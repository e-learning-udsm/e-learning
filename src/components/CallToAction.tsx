import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-12 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-accent animate-pulse" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300 animate-fade-in">
            Join Our Research Community
          </h2>
          <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto hover:opacity-100 transition-opacity duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Whether you're a researcher, educator, student, or industry partner, 
            we welcome collaboration in advancing technology-enhanced learning research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-hero group">
              <Link to="/contact">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg" className="hover:scale-105 hover:bg-white/10 transition-all duration-300">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;