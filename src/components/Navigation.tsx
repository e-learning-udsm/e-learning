import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import elrgLogo from "@/assets/elrg-logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Team", path: "/team" },
    // { name: "Publications", path: "/publications" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background    border-b shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center group">
            <div className="w-12 h-12  flex items-center justify-center shadow-academic group-hover:scale-105 transition-transform">
              <img
                src={elrgLogo}
                alt="eLearning Research Group Logo"
                className="w-12 h-12  bg-white/10 "
              />{" "}
            </div>
            <div className="hidden sm:block ml-2">
              <div className="text-lg font-semibold text-foreground">
                e-Learning
              </div>
              <div className="text-sm text-muted-foreground -mt-1">
                Research Group
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
                  isActivePath(item.path)
                    ? "bg-primary text-primary-foreground shadow-academic"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-12 h-12  flex items-center justify-center  group-hover:scale-105 transition-transform">
            <img
              src="https://www.udsm.ac.tz/sites/default/files/udsm%20logo.png"
              alt="eLearning Research Group Logo"
              className="w-12 h-12  bg-white/10 "
            />{" "}
          </div>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActivePath(item.path)
                      ? "bg-primary text-primary-foreground shadow-academic"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;