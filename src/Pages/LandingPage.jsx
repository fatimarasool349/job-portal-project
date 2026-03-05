// src/App.jsx
import Header from "../components/header";
import HeroSection from "../components/LandingPageComponents/HeroSection";
import Stats from "../components/LandingPageComponents/Stats";
import ThreeStep from "../components/LandingPageComponents/ThreeStep";
import Footer from "../common/Footer";
import FeaturedJobs from "../components/LandingPageComponents/JobFeatures";

function LandingPage() {
  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <HeroSection />
      <Stats />
      <ThreeStep />
      <FeaturedJobs />
      <Footer />
    </div>
  );
}

export default LandingPage;
