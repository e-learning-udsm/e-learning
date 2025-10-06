import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";
import researchTeamImage from "@/assets/research-team.jpg";
import technologyShowcase from "@/assets/technology-showcase.jpg";

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const featuredProjects = [
    {
      title: "Technology-Enhanced Learning Models",
      description: "Developing frameworks for integrating educational technologies at various levels of education.",
      image: technologyShowcase,
      tag: "Framework Development"
    },
    {
      title: "Research Capacity Building",
      description: "Programs for mentoring and supporting researchers in various areas of eLearning research.",
      image: researchTeamImage,
      tag: "Mentorship Program"
    },
    {
      title: "Societal Impact Solutions",
      description: "Applying educational technologies to solve existing challenges in Tanzanian educational contexts.",
      image: heroImage,
      tag: "Impact Research"
    },
  ];

  return (
    <section className="py-12 gradient-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/[0.05] bg-[size:30px_30px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 hover:text-primary transition-colors duration-300 animate-fade-in">
            Featured Research Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Discover some of our current initiatives that are shaping the future of digital learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-card hover:shadow-academic hover:-translate-y-4 transition-all duration-500 group cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transform">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild size="lg" className="shadow-academic hover:scale-105 transition-all duration-300 group">
            <Link to="/research">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;