import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ExternalLink, CheckCircle, Clock, Target } from "lucide-react";
import technologyShowcase from "@/assets/technology-showcase.jpg";
import researchTeamImage from "@/assets/research-team.jpg";
import heroImage from "@/assets/hero-image.jpg";

const Research = () => {
  const ongoingProjects = [
    {
      title: "AI-Enhanced Adaptive Learning Platform",
      description:
        "Developing an AI-powered platform that personalizes learning experiences for Tanzanian students based on individual learning patterns, cultural context, and available technology infrastructure.",
      timeline: "2023 - 2025",
      lead: "Dr. Fatuma Simba",
      funders: ["UDSM Research Grant", "UNESCO"],
      status: "ongoing",
      image: heroImage,
      themes: ["AI in Education", "Adaptive Learning", "Personalization"],
    },
    {
      title: "Rural Teacher Digital Competency Program",
      description:
        "Comprehensive training and support program for rural educators to integrate digital tools effectively in their teaching practice, with focus on low-resource environments.",
      timeline: "2024 - 2026",
      lead: "Dr. Fatuma Simba",
      funders: ["Ministry of Education", "World Bank"],
      status: "ongoing",
      image: researchTeamImage,
      themes: ["Teacher Training", "Digital Literacy", "Rural Education"],
    },
    {
      title: "Open Educational Resources Ecosystem",
      description:
        "Creating a sustainable ecosystem for developing, sharing, and localizing open educational resources in Kiswahili and English for East African contexts.",
      timeline: "2023 - 2024",
      lead: "Dr. Fatuma Simba",
      funders: ["Open Society Foundation", "UDSM"],
      status: "ongoing",
      image: technologyShowcase,
      themes: ["Open Resources", "Localization", "Sustainability"],
    },
  ];

  const completedProjects = [
    {
      title: "COVID-19 Emergency Digital Learning Response",
      description: "Rapid deployment of digital learning solutions during the pandemic, reaching over 50,000 students and 2,000 teachers across Tanzania.",
      timeline: "2020 - 2022",
      outcomes: ["Trained 2,000+ teachers", "Reached 50,000+ students", "Developed 200+ digital lessons"],
      impact: "Maintained educational continuity during critical period",
      report: "#"
    },
    {
      title: "Mobile Learning for Agricultural Extension",
      description: "Pilot program using mobile technologies to deliver agricultural education to farmers in rural Dodoma region.",
      timeline: "2021 - 2023",
      outcomes: ["500+ farmers trained", "30% increase in crop yield", "15 mobile learning modules"],
      impact: "Improved livelihoods and food security",
      report: "#"
    }
  ];

  const collaborations = [
    {
      name: "Ministry of Education, Science and Technology",
      type: "Government",
      focus: "Policy development and teacher training"
    },
    {
      name: "UNESCO Tanzania Office",
      type: "International Organization",
      focus: "Open educational resources and capacity building"
    },
    {
      name: "Sokoine University of Agriculture",
      type: "Academic Institution",
      focus: "Agricultural extension and rural education"
    },
    {
      name: "Vodacom Tanzania Foundation",
      type: "Private Sector",
      focus: "Mobile learning technologies"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Research Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advancing digital learning through innovative research projects, strategic partnerships, 
            and evidence-based solutions for educational challenges.
          </p>
        </div>

        {/* Ongoing Projects */}
        <section className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
            <Clock className="w-8 h-8 text-primary" />
            Ongoing Projects
          </h2>
          <div className="space-y-8">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-academic transition-shadow">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <CardTitle className="text-2xl leading-tight">{project.title}</CardTitle>
                        <Badge variant="default" className="bg-primary shadow-academic">
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{project.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>Lead: {project.lead}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">Funding Partners:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.funders.map((funder, idx) => (
                              <Badge key={idx} variant="outline">{funder}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">Research Themes:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.themes.map((theme, idx) => (
                              <Badge key={idx} variant="secondary">{theme}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="aspect-video lg:aspect-square overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Completed Projects */}
        <section className="mb-20 gradient-card rounded-xl p-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-primary" />
            Completed Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.timeline}</span>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">Key Outcomes:</p>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Impact:</p>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Collaborations */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            Key Collaborations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborations.map((collab, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-academic transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{collab.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">{collab.type}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {collab.focus}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;