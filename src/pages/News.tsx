import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import researchTeamImage from "@/assets/research-team.jpg";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  image: string;
}

interface EventItem {
  title: string;
  date: string;
  location: string;
}

const HomeNewsSection = () => {
  const newsUpdates: NewsItem[] = [
    {
      title: "UDSM e-Learning Group Receives UNESCO Grant",
      date: "2024-03-15",
      category: "Grant Award",
      image: researchTeamImage,
    },
    {
      title: "Partnership with Ministry of Education",
      date: "2024-02-28",
      category: "Partnership",
      image: researchTeamImage,
    },
    {
      title: "Research Paper Wins Best Paper Award",
      date: "2024-02-10",
      category: "Achievement",
      image: researchTeamImage,
    },
  ];

  const upcomingEvents: EventItem[] = [
    {
      title: "International Conference on Digital Learning",
      date: "2024-07-15",
      location: "UDSM Campus, Dar es Salaam",
    },
    {
      title: "AI Tools Workshop for Educators",
      date: "2024-04-20",
      location: "Virtual & UDSM",
    },
    {
      title: "Teacher Training Webinar",
      date: "2024-04-05",
      location: "Online",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="w-full mx-auto lg:px-24 py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          Latest News & Events
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* News List */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">News</h3>
            <div className="space-y-4">
              {newsUpdates.map((news, idx) => (
                <Card
                  key={idx}
                  className="flex items-center p-2 shadow-md rounded-lg"
                >
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg mr-3">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
                      <span>{formatDate(news.date)}</span>
                      <Badge variant="outline">{news.category}</Badge>
                    </div>
                    <CardTitle className="text-base">{news.title}</CardTitle>
                    <a
                      href="#"
                      className="text-blue-600 text-sm flex items-center gap-1 mt-1"
                    >
                      Read More <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Events List */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, idx) => (
                <Card
                  key={idx}
                  className="p-3 shadow-md rounded-lg flex justify-between items-center"
                >
                  <div>
                    <CardTitle className="text-base">{event.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {event.location}
                    </CardDescription>
                  </div>
                  <Badge variant="default">{formatDate(event.date)}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsSection;
