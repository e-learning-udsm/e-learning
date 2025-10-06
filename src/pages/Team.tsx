import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, UserCheck } from "lucide-react";
import researchTeamImage from "@/assets/research-team.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const leadership = [
    {
      profile: "https://cse.udsm.ac.tz/storage/staffsImages/Ken_CSE.jpg",
      name: "Dr. Kennedy Frank Mwakisole",
      role: "Research Group Coordinator",
      bio: "Dr. Kennedy F. Mwakisole is a Lecturer in the Department of Computer Science and Engineering at CoICT, UDSM. He holds a PhD in Computer Science, focusing on cloud computing for e-learning. With over a decade of experience, he integrates ICT into teaching and learning.",
      email: "kenfra@udsm.ac.tz",
      specialties: [
        "e-Learning technologies",
        "Cloud-based services",
        "Learning analytics",
        "Educational data mining",
      ],
    },
    {
      profile:
        "https://ete.udsm.ac.tz/public/storage/staffsImages/jstephene1.jpg",
      name: "Ms Josephine Kalekwa Stephen",
      role: "Research Group Coordinator",
      bio: "Josephine Kalekwa Stephen is an Assistant Lecturer at UDSM, Department of Electronics and Telecommunications. Her interests include signal processing, biomedical radar systems, and wireless networks.",
      email: "jstephen@udsm.ac.tz",
      specialties: ["e-Learning technologies"],
    },
    {
      profile: "https://cse.udsm.ac.tz/storage/staffsImages/3-3.jpg",
      name: "Dr. Fatuma Simba",
      role: "Principal Researcher",
      bio: "Dr. Fatuma Simba is a Senior Lecturer in Computer Science and Engineering at CoICT, UDSM. She researches viable connectivity technology for e-learning in Tanzania, wireless broadband networks, and cybersecurity.",
      email: "fatmasimba@udsm.ac.tz",
      specialties: [
        "Wireless broadband",
        "e-Learning",
        "Cybersecurity",
        "Software development",
      ],
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // continuous scroll
    cssEase: "linear",
    swipe: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Research Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated researchers, students, and collaborators driving
            innovation in digital learning at UDSM.
          </p>
        </div>

        {/* Team Image */}
        <div className="mb-20">
          <div className="rounded-xl overflow-hidden shadow-hero">
            <img
              src={researchTeamImage}
              alt="UDSM e-Learning Research Team"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Leadership Carousel */}
        <section className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center justify-center gap-3 text-gray-900">
            <UserCheck className="w-8 h-8 text-primary" />
            Leadership Team
          </h2>

          <Slider {...sliderSettings} className="max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="px-4">
                <Card className="  border-none bg-white p-6 hover:scale-105 transition-transform duration-300">
                  <CardHeader className="flex flex-col items-center gap-4">
                    <img
                      src={leader.profile}
                      alt={leader.name}
                      className="w-48 h-48 object-cover rounded-full border-4 border-blue-500"
                    />
                    <CardTitle className="text-2xl text-center">
                      {leader.name}
                    </CardTitle>
                    <Badge variant="default" className="w-fit shadow-academic">
                      {leader.role}
                    </Badge>
                  </CardHeader>

                  <CardContent className="text-center mt-4">
                    <CardDescription className="text-sm text-gray-700 mb-4">
                      {leader.bio}
                    </CardDescription>
                    <div className="mb-4">
                      <p className="font-medium mb-2 text-gray-800">
                        Specialties:
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {leader.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 transition active:scale-95"
                      onClick={() =>
                        (window.location.href = `mailto:${leader.email}`)
                      }
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {leader.email}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </section>

        {/* ...Join Our Team Section remains the same */}
      </div>
    </div>
  );
};

export default Team;
