// src/components/FinalCTA.tsx

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const FinalCTA = () => (
  <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10">
          Contact us today to discuss your project. We'll provide a free, no-obligation quote and expert advice to get you started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#quote">
            <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 py-6 gap-2">
              Request a Free Quote <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
          <a href="tel:6476853620">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground font-semibold text-base px-8 py-6 gap-2">
              <Phone className="h-5 w-5" /> Call 647-685-3620
            </Button>
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/70 font-body">
          <Mail className="h-5 w-5" />
          {/* CORRECTED EMAIL BELOW */}
          <a href="mailto:prtrenovationsinc@gmail.com" className="hover:text-secondary transition-colors">prtrenovationsinc@gmail.com</a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
