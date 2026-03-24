// src/components/HeroSection.tsx

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mov" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* CHANGED: Removed the <br /> to put the headline on one line */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Your Vision, <span className="text-secondary">Our Craft</span>
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Transforming homes and commercial spaces across Ontario with expert
            craftsmanship, meticulous attention to detail, and results that stand
            the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 py-6 gap-2"
              >
                Request a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="#projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-black font-semibold text-base px-8 py-6 gap-2 transition-all duration-300"
              >
                <Play className="h-4 w-4 fill-current" />
                View Our Work
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-secondary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
