import FeatureSection from "@/components/feature-section";
import { Testimonials } from "@/components/testimonials";
import { LandingHero } from "@/components/landing-hero";
import Workflow from "@/components/landing-workflow";
import Pricing from "@/components/landing-pricing";
import Footer from "@/components/landing-footer";
import Navbar from "@/components/landing-navbar-alternative";

const LandingPage = () => {
    return (
      
    <div className="h-full">
        <Navbar />
        <LandingHero />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials  />
        <Footer />
    </div>
    )
};

export default LandingPage;