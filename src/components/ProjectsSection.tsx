import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import bath1 from "@/assets/project-bathroom-1.jpeg";
import bath2 from "@/assets/project-bathroom-2.jpeg";
import bath3 from "@/assets/project-bathroom-3.jpeg";
import bath4 from "@/assets/project-bathroom-4.png";
import bath5 from "@/assets/project-bathroom-5.png";
import bath6 from "@/assets/project-bathroom-6.png";
import dining from "@/assets/project-dining.png";
import living from "@/assets/project-living.png";

const projects = [
  { id: 1, img: bath1, title: "Modern Double Vanity", category: "Bathroom", desc: "Complete bathroom renovation featuring a sleek black quartz countertop with dual sinks, LED mirror, and matte black fixtures for a sophisticated modern look." },
  { id: 2, img: bath2, title: "Marble Glass Shower", category: "Bathroom", desc: "Full glass enclosure shower with floor-to-ceiling marble-look porcelain tiles and matte black hardware creating a stunning focal point." },
  { id: 3, img: bath3, title: "Luxury Walk-In Shower", category: "Bathroom", desc: "Premium walk-in shower with dramatic veined marble walls, gold hardware accents, and a built-in niche for a spa-like experience." },
  { id: 4, img: bath4, title: "Elegant Single Vanity", category: "Bathroom", desc: "Warm wood cabinetry with marble countertop, backlit LED mirror, and modern crystal light fixtures for a welcoming, elegant feel." },
  { id: 5, img: bath5, title: "Freestanding Tub Suite", category: "Bathroom", desc: "Full master bathroom renovation with freestanding soaker tub, glass shower, heated towel rack, and plantation shutters." },
  { id: 6, img: bath6, title: "Sliding Door Shower", category: "Bathroom", desc: "Barn-style sliding glass shower door with grey porcelain tile, built-in niche, and matte black fixtures for a clean modern design." },
  { id: 7, img: dining, title: "Custom Accent Wall", category: "Interior", desc: "Bold blue geometric panel accent wall in dining room, adding depth and character to the living space." },
  { id: 8, img: living, title: "Living Room Transformation", category: "Interior", desc: "Complete living space renovation with tray ceiling, designer wallpaper, crown molding, and refined finishing throughout." },
];

const categories = ["All", "Bathroom", "Interior"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">Our Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">Featured Projects</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">Every project is a testament to our commitment to quality, precision, and craftsmanship.</p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium font-body transition-all ${
                filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(p)}
                className="group cursor-pointer relative overflow-hidden rounded-lg aspect-[4/5]"
              >
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-secondary text-xs font-semibold uppercase tracking-wider font-body">{p.category}</span>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mt-1">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <a href="#quote">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 gap-2">
              Start Your Renovation <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl"
            >
              <div className="relative">
                <img src={selected.img} alt={selected.title} className="w-full aspect-video object-cover" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-foreground/60 backdrop-blur-sm text-primary-foreground rounded-full p-2 hover:bg-foreground/80 transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider font-body">{selected.category}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-3">{selected.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">{selected.desc}</p>
                <a href="#quote">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2" onClick={() => setSelected(null)}>
                    Get a Quote for a Similar Project <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
