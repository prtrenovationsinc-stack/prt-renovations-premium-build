import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a typical renovation take?", a: "Timelines vary by project scope. A bathroom renovation typically takes 2-4 weeks, while a full basement build can take 6-10 weeks. We provide a detailed timeline during the planning phase." },
  { q: "Do you provide free estimates?", a: "Yes! We offer free consultations and detailed quotes for all projects. There's no obligation — just honest advice and transparent pricing." },
  { q: "Are you licensed and insured?", a: "Absolutely. PRT Renovations Inc. is fully licensed and insured, giving you complete peace of mind throughout your renovation project." },
  { q: "What areas do you serve?", a: "We serve homeowners and businesses across the Greater Toronto Area and surrounding Ontario regions including Mississauga, Brampton, Hamilton, Burlington, Oakville, and more." },
  { q: "Can you work with my budget?", a: "We work with a wide range of budgets and always recommend solutions that maximize value. During the consultation, we'll discuss options that fit your goals and budget." },
  { q: "Do you handle permits and inspections?", a: "Yes. We manage the entire process including permits, inspections, and compliance so you don't have to worry about a thing." },
];

const FAQSection = () => (
  <section className="section-padding bg-cream">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">FAQ</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Common Questions</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border border-border px-6">
            <AccordionTrigger className="font-body font-semibold text-foreground text-left py-5 hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
