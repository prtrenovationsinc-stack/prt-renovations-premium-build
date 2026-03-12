import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, HardHat, CheckCheck } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Consultation", desc: "We start with a free consultation to understand your vision, goals, and budget." },
  { icon: ClipboardList, step: "02", title: "Planning & Quote", desc: "Our team creates a detailed plan and transparent quote so there are no surprises." },
  { icon: HardHat, step: "03", title: "Build & Renovation", desc: "Expert craftsmen bring your project to life with precision and premium materials." },
  { icon: CheckCheck, step: "04", title: "Final Walkthrough", desc: "We walk through every detail together to ensure your complete satisfaction." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">How It Works</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">Our Simple Process</h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">From first call to final walkthrough — we make renovations simple and stress-free.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="text-center relative"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 relative">
              <s.icon className="h-9 w-9 text-primary" />
              <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full text-xs font-bold font-body flex items-center justify-center">{s.step}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
