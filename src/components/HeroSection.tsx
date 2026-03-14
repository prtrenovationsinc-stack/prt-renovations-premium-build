// src/components/HeroSection.tsx

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ... Video Background and Overlay ... */}
      
      <div className="container relative z-10 px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* ... Hero Heading and Paragraph ... */}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              /* CHANGED: Added bg-white/10 and text-white for visibility, and hover states for contrast */
              className="border-white text-white bg-white/10 hover:bg-white hover:text-slate-900 px-8 h-14 text-lg transition-all duration-300"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
