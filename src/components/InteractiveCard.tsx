import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface InteractiveCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const InteractiveCard = ({ icon: IconComponent, title, description, index }: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="text-center shadow-card hover:shadow-academic hover:-translate-y-3 hover:scale-105 transition-all duration-500 cursor-pointer group border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-3">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-academic group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-hero">
          <IconComponent 
            className={`w-8 h-8 text-primary-foreground transition-all duration-500 ${
              isHovered ? 'scale-125 rotate-12' : ''
            }`} 
          />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transform">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default InteractiveCard;