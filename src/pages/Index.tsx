import HeroSection from "@/components/HeroSection";
import MissionBanner from "@/components/MissionBanner";
import HighlightsSection from "@/components/HighlightsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import CallToAction from "@/components/CallToAction";
import HomeNewsSection from "./News";

const Index = () => {

  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionBanner />
      <HighlightsSection />
      <FeaturedProjects />
      <HomeNewsSection/>
      <CallToAction />
    </div>
  );
};

export default Index;