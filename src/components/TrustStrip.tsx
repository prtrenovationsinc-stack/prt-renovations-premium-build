import { Shield, Award, MapPin, Clock, Wrench } from "lucide-react";

const items = [
  { icon: Award, label: "High-Quality Craftsmanship" },
  { icon: Shield, label: "Residential & Commercial" },
  { icon: MapPin, label: "Ontario-Based" },
  { icon: Clock, label: "Reliable Execution" },
  { icon: Wrench, label: "Custom Solutions" },
];

const TrustStrip = () => (
  <section className="bg-primary py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-primary-foreground/90">
            <item.icon className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium font-body whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
