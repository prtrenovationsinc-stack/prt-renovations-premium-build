// src/pages/Index.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import AreasWeServe from "@/components/AreasWeServe";
import QuoteForm from "@/components/QuoteForm";
import FAQSection from "@/components/FAQSection";
import SocialSection from "@/components/SocialSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  const location = useLocation();

  // This automatically scrolls the user to the right section when they click a button from the /links page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // A tiny 150 millisecond delay ensures the page is fully drawn before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    } else {
      // If there is no hash, make sure they start at the very top of the page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ProcessSection />
      <AreasWeServe />
      <QuoteForm />
      <FAQSection />
      <SocialSection />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Index;
