import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Shield } from "lucide-react";
import { toast } from "sonner";

const projectTypes = [
  "Bathroom Renovation",
  "Kitchen Renovation",
  "Basement Build / Finishing",
  "Tile Installation",
  "Deck / Patio",
  "Commercial Renovation",
  "General Construction",
  "Other",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not Sure Yet",
];

const startTimes = [
  "ASAP",
  "Within 1 Month",
  "1 - 3 Months",
  "3 - 6 Months",
  "Just Planning",
];

const QuoteForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Quote request submitted! We'll be in touch shortly.");
    }, 1500);
  };

  return (
    <section id="quote" className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">Get Started</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-foreground mt-3 mb-6">Request Your Free Quote</h2>
            <p className="text-charcoal-foreground/70 font-body text-lg leading-relaxed mb-8">
              Tell us about your project and we'll get back to you with a detailed plan and quote. No pressure, no obligation — just honest advice from renovation experts.
            </p>
            <div className="flex items-center gap-3 text-charcoal-foreground/60 font-body text-sm">
              <Shield className="h-5 w-5 text-secondary" />
              Your information is secure and never shared.
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-background rounded-xl p-8 md:p-10 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-2">Full Name *</label>
                <Input required placeholder="John Smith" className="bg-muted border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-2">Phone Number *</label>
                <Input required type="tel" placeholder="(647) 000-0000" className="bg-muted border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-2">Email *</label>
                <Input required type="email" placeholder="john@example.com" className="bg-muted border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-2">Location *</label>
                <Input required placeholder="City, Ontario" className="bg-muted border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-2">Type of Project *</label>
                <select required className="w-full h-10 rounded-md border border-border bg-muted px-3 text-sm font-body text-foreground">
                  <option value="">Select a project type</option>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium font-body text-foreground mb-2">Budget Range</label>
                <select className="w-full h-10 rounded-md border border-border bg-muted px-3 text-sm font-body text-foreground">
                  <option value="">Select budget range</option>
                  {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium font-body text-foreground mb-2">Preferred Start Time</label>
                <select className="w-full h-10 rounded-md border border-border bg-muted px-3 text-sm font-body text-foreground">
                  <option value="">When would you like to start?</option>
                  {startTimes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium font-body text-foreground mb-2">Project Details</label>
                <Textarea placeholder="Tell us about your renovation project — scope, ideas, inspiration..." rows={4} className="bg-muted border-border" />
              </div>
            </div>
            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="w-full mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base py-6 gap-2"
            >
              {submitting ? "Submitting..." : <>Request My Free Quote <Send className="h-5 w-5" /></>}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
