import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import elrgLogo from "@/assets/elrg-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Research Projects", path: "/research" },
    { name: "Our Team", path: "/team" },
    // { name: "Publications", path: "/publications" },
  ];

  const resources = [
    { name: "News & Events", path: "/news" },
    { name: "Contact Us", path: "/contact" },
    { name: "UDSM Main Site", path: "https://www.udsm.ac.tz", external: true },
    { name: "UDSM Library", path: "https://www.udsm.ac.tz/web/index.php/institutes/library", external: true },
  ];

  const activities = [
    "Research Seminars",
    "Mentoring Programs", 
    "Grant Proposal Development",
    "International Collaborations",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="w-full mx-auto px-8 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={elrgLogo}
                alt="eLearning Research Group Logo"
                className="w-12 h-12 rounded-lg bg-white/10 p-2"
              />
              <div>
                <div className="text-lg font-semibold">eLRG</div>
                <div className="text-sm opacity-80">UDSM</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Promoting multi-disciplinary research in technology-enhanced
              learning at the University of Dar es Salaam.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 opacity-80" />
                <span className="opacity-90">University of Dar es Salaam</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="opacity-90">elrg@udsm.ac.tz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.path}>
                  {resource.external ? (
                    <a
                      href={resource.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity flex items-center space-x-1"
                    >
                      <span>{resource.name}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={resource.path}
                      className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                    >
                      {resource.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Activities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Activities</h3>
            <ul className="space-y-2">
              {activities.map((activity, index) => (
                <li key={index} className="text-sm opacity-90">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm opacity-80 text-center md:text-left">
            <p>
              &copy; 2025 eLearning Research Group, University of Dar es Salaam.
            </p>
            <p className="mt-1">All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;