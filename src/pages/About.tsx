import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Users, Globe, BookOpen, Zap } from "lucide-react";
import researchTeamImage from "@/assets/research-team.jpg";
import { motion } from "framer-motion";

const About = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Research Seminars",
      description:
        "Organizing regular research seminars for researchers and postgraduate students in e-learning.",
    },
    {
      icon: Users,
      title: "Mentoring & Support",
      description:
        "Providing mentoring and support for inexperienced researchers on various areas of eLearning research.",
    },
    {
      icon: Globe,
      title: "External Collaboration",
      description:
        "Developing and sustaining external research links and collaboration with international partners.",
    },
    {
      icon: Zap,
      title: "Funding & Proposals",
      description:
        "Developing fundable research proposals and pursuing external funding opportunities.",
    },
  ];

  const milestones = [
    { year: "2018", event: "Research group established at UDSM" },
    {
      year: "2020",
      event: "First major collaboration with Ministry of Education",
    },
    {
      year: "2021",
      event: "COVID-19 emergency digital learning response program",
    },
    { year: "2022", event: "International partnership with UNESCO" },
    { year: "2023", event: "Launch of open educational resources platform" },
    { year: "2024", event: "AI for Education research initiative begins" },
  ];

  const themes = [
    "Technology-Enhanced Learning",
    "Educational Technology Applications",
    "E-Learning Research Methods",
    "Digital Learning Environments",
    "Learning Management Systems",
    "Mobile Learning Solutions",
    "Educational Data Analytics",
    "Societal Challenge Solutions",
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            About eLearning Research Group
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A multi-disciplinary research group promoting research in
            technology-enhanced learning at all levels of education at the
            University of Dar es Salaam.
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 flex flex-col items-center text-center bg-muted/30">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Advancing online learning with remote experiments, intelligence,
              immersive and accessible digital education for all.
            </p>
          </div>
          <div className="p-8 flex flex-col items-center text-center bg-muted/30">
            <Eye className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Shaping the future of digital education through emerging
              technologies.
            </p>
          </div>
        </section>

        {/* Research Image + Activities */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={researchTeamImage}
                alt="UDSM e-Learning Research Team"
                className="w-full h-[28rem] object-cover"
              />
            </motion.div>

            {/* Right: Activities */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative p-8 lg:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                  Our Activities
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {activities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12  flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            {activity.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Milestones - Scroll Snap Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Key Milestones
          </h2>

          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex items-start gap-12 min-w-max px-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center min-w-[160px] snap-center"
                >
                  {/* dot */}
                  <div className="w-3 h-3 bg-primary mb-6" />

                  {/* year */}
                  <span className="text-primary font-bold text-lg mb-2">
                    {m.year}
                  </span>

                  {/* event */}
                  <p className="text-sm text-muted-foreground leading-snug max-w-[150px]">
                    {m.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Themes */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            Core Research Themes
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {themes.map((theme, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {theme}
                </Badge>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our interdisciplinary approach combines education, technology,
                psychology, and cultural studies to develop holistic solutions
                that address the complex challenges of digital learning in
                diverse African contexts.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
