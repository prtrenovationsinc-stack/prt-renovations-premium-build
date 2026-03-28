// src/components/WhyChooseUs.tsx

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  { title: "Quality Workmanship", desc: "Every detail is executed with precision using premium materials and proven techniques." },
  { title: "Attention to Detail", desc: "From initial design to final finish, we obsess over the details that make projects exceptional." },
  { title: "Reliable Timelines", desc: "We respect your time. Projects are planned meticulously and delivered on schedule." },
  { title: "Clean & Professional", desc: "Our job sites are organized, safe, and maintained to the highest professional standards." },
  { title: "Full-Service Expertise", desc: "Residential and commercial — we handle projects of every scope with the same level of care." },
  { title: "Built to Last", desc: "We build for beauty, function, and long-term value that stands the test of time." },
];

const WhyChooseUs = () => (
  <section id="about" className="section-padding bg-charcoal">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">Why PRT Renovations</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal-foreground mt-3 mb-6">Built on Brotherhood,<br />Driven by Excellence</h2>
          
          {/* CHANGED: Added "family-owned business" */}
          <p className="text-charcoal-foreground/70 font-body text-lg leading-relaxed mb-4">
            PRT Renovations Inc. is a family-owned business founded by two brothers, <strong className="text-charcoal-foreground">Parm & Raj Thiara</strong>, who shared a bold vision — to build a construction company rooted in integrity, unmatched quality, and genuine care for every client.
          </p>
          
          {/* CHANGED: Added "over 10 years of experience" */}
          <p className="text-charcoal-foreground/70 font-body text-lg leading-relaxed mb-4">
            Growing up, they learned the value of hard work, precision, and doing things right the first time. With over 10 years of experience in the industry, that foundation has shaped PRT Renovations into one of Ontario's most trusted renovation teams — known for transforming spaces that families and businesses love for years to come.
          </p>
          
          <p className="text-charcoal-foreground/70 font-body text-lg leading-relaxed">
            Whether it's a luxury bathroom, a full basement build, or a commercial remodel, Parm and Raj bring the same hands-on dedication and passion to every single project.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid sm:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <div key={p.title} className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-lg font-semibold text-charcoal-foreground mb-1">{p.title}</h4>
                <p className="text-charcoal-foreground/60 text-sm font-body leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
