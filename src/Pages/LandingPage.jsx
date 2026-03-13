// src/App.jsx
import HeroSection from "../components/LandingPageComponents/HeroSection";
import Stats from "../components/LandingPageComponents/Stats";
import ThreeStep from "../components/LandingPageComponents/ThreeStep";
import FeaturedJobs from "../components/LandingPageComponents/JobFeatures";

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
