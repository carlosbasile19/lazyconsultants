import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import FeatureSection from "@/components/feature-section";
import { Testimonials } from "@/components/testimonials";
import { LandingHero } from "@/components/landing-hero";
import Workflow from "@/components/landing-workflow";
import Pricing from "@/components/landing-pricing";
import Footer from "@/components/landing-footer";
import Navbar from "@/components/landing-navbar-alternative";
import { auth } from "@clerk/nextjs";
import FeaturesAccordion from '@/components/FeaturesAccordion';
import Problem from '@/components/Problem';
import FAQ from '@/components/FAQ';

const LandingPage = () => { 

        const { userId } = auth();

        if (userId) {
            redirect("/dashboard");
        }

        return (
            <div className="h-full">
                <Navbar />
                <LandingHero />
                <Problem />
                <FeaturesAccordion />
                <Pricing />
                <FAQ />
                <Footer />
            </div>
        );
    };

export default LandingPage;