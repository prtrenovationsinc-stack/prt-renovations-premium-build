// src/pages/Index.tsx

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import AreasWeServe from "@/components/AreasWeServe"; // <-- New Import
import QuoteForm from "@/components/QuoteForm";
import FAQSection from "@/components/FAQSection";
import SocialSection from "@/components/SocialSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <TrustStrip />
    <ServicesSection />
    <ProjectsSection />
    <WhyChooseUs />
    <TestimonialsSection />
    <ProcessSection />
    {/* Dropped in right above the quote form */}
    <AreasWeServe />
    <QuoteForm />
    <FAQSection />
    <SocialSection />
    <FinalCTA />
    <Footer />
    <FloatingCTA />
  </>
);

export default Index;
