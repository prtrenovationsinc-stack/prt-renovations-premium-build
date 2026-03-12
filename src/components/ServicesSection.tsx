import { motion } from "framer-motion";
import { Bath, ChefHat, Home, Grid3X3, Fence, Building2, Hammer } from "lucide-react";

const services = [
  { icon: Bath, title: "Bathroom Renovations", desc: "Luxury vanities, tile showers, modern fixtures — we transform bathrooms into spa-like retreats." },
  { icon: ChefHat, title: "Kitchen Renovations", desc: "Custom cabinetry, countertops, and layouts designed for beauty and function." },
  { icon: Home, title: "Basement Builds & Finishing", desc: "Turn your basement into a fully finished living space, rec room, or rental unit." },
  { icon: Grid3X3, title: "Tile Installation", desc: "Precision tile work for floors, walls, backsplashes, and showers with premium materials." },
  { icon: Fence, title: "Decks & Patios", desc: "Custom-built outdoor living spaces that extend your home's footprint and value." },
  { icon: Building2, title: "Commercial Renovations", desc: "Professional renovations for offices, retail spaces, and commercial properties." },
  { icon: Hammer, title: "General Construction", desc: "Custom builds and renovation projects of any scope, handled with expert precision." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-cream">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">What We Do</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">Our Services</h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
          From concept to completion, we deliver premium renovations across every area of your home or business.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-background rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-secondary/40"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
              <s.icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{s.desc}</p>
            <a href="#quote" className="text-primary font-body text-sm font-semibold hover:text-secondary transition-colors inline-flex items-center gap-1">
              Get a Quote →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
