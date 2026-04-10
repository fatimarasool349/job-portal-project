// src/App.jsx
import HeroSection from "../components/landingPageComponents/HeroSection";
import Stats from "../components/landingPageComponents/Stats";
import ThreeStep from "../components/landingPageComponents/ThreeStep";
import FeaturedJobs from "../components/landingPageComponents/JobFeatures";

function LandingPage() {
  return (
    <div className="font-sans bg-gray-100">
      <HeroSection />
      <Stats />
      <ThreeStep />
      <FeaturedJobs />
    </div>
  );
}

export default LandingPage;
