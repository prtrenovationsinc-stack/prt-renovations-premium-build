import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const FinalCTA = () => (
  <section id="contact" className="section-padding bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-foreground/90" />
    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Renovate<br />Your Space?
          </h2>
          <p className="text-primary-foreground/70 font-body text-lg leading-relaxed mb-8">
            Whether you're planning a bathroom refresh, a full kitchen remodel, or a commercial renovation — we're ready to bring your vision to life. Get in touch today.
          </p>
          <a href="#quote">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 py-6 gap-2">
              Request a Free Quote <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
          <a href="tel:6476853620" className="flex items-center gap-4 text-primary-foreground/90 hover:text-secondary transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="font-body text-sm text-primary-foreground/50">Call Us</p>
              <p className="font-body font-semibold text-lg">647-685-3620</p>
            </div>
          </a>
          <a href="mailto:info@prtrenovations.ca" className="flex items-center gap-4 text-primary-foreground/90 hover:text-secondary transition-colors group">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="font-body text-sm text-primary-foreground/50">Email Us</p>
              <p className="font-body font-semibold text-lg">info@prtrenovations.ca</p>
            </div>
          </a>
          <div className="flex items-center gap-4 text-primary-foreground/90">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="font-body text-sm text-primary-foreground/50">Location</p>
              <p className="font-body font-semibold text-lg">Ontario, Canada</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/90">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="font-body text-sm text-primary-foreground/50">Business Hours</p>
              <p className="font-body font-semibold">Mon–Fri: 8:00 AM – 6:00 PM</p>
              <p className="font-body text-sm text-primary-foreground/60">Sat: 9:00 AM – 3:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
