import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", location: "Mississauga, ON", text: "PRT Renovations completely transformed our master bathroom. The attention to detail was incredible — from the tile work to the fixtures, everything looks like it belongs in a design magazine. Highly recommend!", rating: 5 },
  { name: "David & Lisa K.", location: "Brampton, ON", text: "We hired PRT for a full basement finish and couldn't be happier. The team was professional, on schedule, and the quality is outstanding. Our basement is now the best room in the house.", rating: 5 },
  { name: "James R.", location: "Toronto, ON", text: "As a commercial property owner, I need contractors I can trust. PRT delivered a flawless renovation of our office space — on time and on budget. They're our go-to team now.", rating: 5 },
  { name: "Priya S.", location: "Oakville, ON", text: "From the initial consultation to the final walkthrough, Parm and Raj were exceptional. Our kitchen renovation exceeded every expectation. The craftsmanship speaks for itself.", rating: 5 },
  { name: "Michael T.", location: "Hamilton, ON", text: "PRT built us a beautiful deck and patio area. Their design ideas were spot on and the build quality is rock solid. We've already recommended them to three neighbors.", rating: 5 },
  { name: "Angela W.", location: "Burlington, ON", text: "We renovated two bathrooms with PRT and the results are stunning. Clean, professional, and truly premium quality. Worth every penny.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-cream">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">Client Reviews</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">Real feedback from homeowners and business owners across Ontario.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background rounded-lg p-8 shadow-sm border border-border relative"
          >
            <Quote className="absolute top-6 right-6 h-8 w-8 text-secondary/20" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground font-body text-sm">{t.name}</p>
              <p className="text-muted-foreground font-body text-xs">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
