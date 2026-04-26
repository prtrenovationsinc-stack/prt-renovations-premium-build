// src/pages/ServiceLandingPage.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Star } from "lucide-react";

import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  keywords: string[];
  services: string[];
  process: string[];
  cities: string[];
};

const servicePages: Record<string, ServicePage> = {
  "/bathroom-renovations": {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations in the GTA",
    shortTitle: "Bathroom Renovations",
    metaTitle: "Bathroom Renovations GTA | PRT Renovations Inc.",
    metaDescription:
      "PRT Renovations Inc. provides bathroom renovations across the GTA and Ontario, including custom showers, vanities, tile work, fixtures, and complete bathroom remodels.",
    heroDescription:
      "Upgrade your bathroom with clean tile work, modern fixtures, custom vanities, glass showers, and a finish that feels fresh, functional, and built to last.",
    keywords: [
      "Bathroom renovation contractor GTA",
      "Bathroom remodel Ontario",
      "Custom shower renovation",
      "Tile bathroom renovation",
    ],
    services: [
      "Full bathroom remodels",
      "Standing showers and glass shower doors",
      "Bathroom tile floors and shower walls",
      "Vanities, mirrors, lighting, and fixtures",
      "Plumbing and electrical coordination",
      "Modern, luxury, and practical bathroom upgrades",
    ],
    process: [
      "Review your bathroom layout, goals, and budget",
      "Plan materials, finishes, fixtures, and timeline",
      "Complete demolition, prep, tile, fixture, and finishing work",
      "Final walkthrough to make sure the finish is clean and complete",
    ],
    cities: ["Milton", "Brampton", "Mississauga", "Oakville", "Burlington", "Toronto", "Vaughan", "Hamilton"],
  },
  "/kitchen-renovations": {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations in the GTA",
    shortTitle: "Kitchen Renovations",
    metaTitle: "Kitchen Renovations GTA | PRT Renovations Inc.",
    metaDescription:
      "PRT Renovations Inc. provides kitchen renovations across the GTA and Ontario, including cabinets, islands, countertops, flooring, backsplashes, and complete kitchen remodels.",
    heroDescription:
      "Transform your kitchen into a cleaner, more functional space with updated cabinets, islands, counters, backsplashes, flooring, lighting, and layout improvements.",
    keywords: [
      "Kitchen renovation contractor GTA",
      "Kitchen remodel Ontario",
      "Custom kitchen renovation",
      "Kitchen cabinets and island renovation",
    ],
    services: [
      "Complete kitchen remodels",
      "Cabinet, island, and layout upgrades",
      "Countertops and backsplash installation",
      "Flooring and tile work",
      "Lighting and fixture upgrades",
      "Open-concept and modern kitchen improvements",
    ],
    process: [
      "Understand your kitchen layout, style, and storage needs",
      "Plan finishes, cabinets, counters, lighting, and timeline",
      "Coordinate installation, trades, and finishing details",
      "Final walkthrough to confirm everything is functional and clean",
    ],
    cities: ["Milton", "Brampton", "Mississauga", "Oakville", "Burlington", "Toronto", "Vaughan", "Hamilton"],
  },
  "/basement-finishing": {
    slug: "basement-finishing",
    title: "Basement Finishing in the GTA",
    shortTitle: "Basement Finishing",
    metaTitle: "Basement Finishing GTA | PRT Renovations Inc.",
    metaDescription:
      "PRT Renovations Inc. provides basement finishing and basement renovation services across the GTA and Ontario, including framing, drywall, flooring, washrooms, rec rooms, and complete basement builds.",
    heroDescription:
      "Turn your unfinished basement into a clean, comfortable, and useful living space with proper planning, framing, drywall, flooring, lighting, washrooms, and finishing details.",
    keywords: [
      "Basement finishing GTA",
      "Basement renovation contractor Ontario",
      "Finished basement contractor",
      "Basement remodel near me",
    ],
    services: [
      "Full basement finishing",
      "Framing, drywall, flooring, and trim",
      "Basement washrooms and laundry areas",
      "Rec rooms, family rooms, and rental-style layouts",
      "Lighting, electrical, and plumbing coordination",
      "Modern, practical basement living spaces",
    ],
    process: [
      "Review your basement goals, layout, and intended use",
      "Plan rooms, lighting, flooring, washroom needs, and budget",
      "Complete rough-in, framing, drywall, flooring, and finishes",
      "Final walkthrough to check details, cleanup, and usability",
    ],
    cities: ["Milton", "Brampton", "Mississauga", "Oakville", "Burlington", "Toronto", "Vaughan", "Hamilton"],
  },
  "/tile-installation": {
    slug: "tile-installation",
    title: "Tile Installation in the GTA",
    shortTitle: "Tile Installation",
    metaTitle: "Tile Installation GTA | PRT Renovations Inc.",
    metaDescription:
      "PRT Renovations Inc. provides tile installation across the GTA and Ontario for bathrooms, kitchens, showers, floors, backsplashes, and feature walls.",
    heroDescription:
      "Get clean, precise tile installation for bathrooms, kitchens, showers, floors, backsplashes, and feature walls with a finish that improves the look and value of your space.",
    keywords: [
      "Tile installation GTA",
      "Bathroom tile contractor",
      "Kitchen backsplash installation",
      "Floor tile installation Ontario",
    ],
    services: [
      "Bathroom floor and shower tile",
      "Kitchen backsplash installation",
      "Main floor and entry tile",
      "Feature walls and accent tile",
      "Tile prep, layout, grout, and finishing",
      "Clean cuts, clean lines, and detailed finishing",
    ],
    process: [
      "Review your space, tile type, and design idea",
      "Plan layout, pattern, grout style, and prep needs",
      "Install tile with clean spacing, cuts, and finishing",
      "Final walkthrough to confirm the layout and finish quality",
    ],
    cities: ["Milton", "Brampton", "Mississauga", "Oakville", "Burlington", "Toronto", "Vaughan", "Hamilton"],
  },
};

const defaultPage = servicePages["/bathroom-renovations"];

const setMetaTag = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const setPropertyTag = (property: string, content: string) => {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const setCanonical = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
};

const ServiceLandingPage = () => {
  const location = useLocation();
  const page = servicePages[location.pathname] || defaultPage;
  const pageUrl = `https://www.prtrenovations.ca/${page.slug}`;

  useEffect(() => {
    document.title = page.metaTitle;
    setMetaTag("description", page.metaDescription);
    setMetaTag("keywords", [...page.keywords, ...page.cities.map((city) => `${page.shortTitle} ${city}`)].join(", "));
    setCanonical(pageUrl);

    setPropertyTag("og:title", page.metaTitle);
    setPropertyTag("og:description", page.metaDescription);
    setPropertyTag("og:url", pageUrl);
    setPropertyTag("twitter:title", page.metaTitle);
    setPropertyTag("twitter:description", page.metaDescription);
    setPropertyTag("twitter:url", pageUrl);

    const existingSchema = document.getElementById("service-page-schema");
    existingSchema?.remove();

    const schema = document.createElement("script");
    schema.id = "service-page-schema";
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.shortTitle,
      description: page.metaDescription,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "PRT Renovations Inc.",
        url: "https://www.prtrenovations.ca/",
        telephone: "+1-647-685-3620",
        email: "prtrenovationsinc@gmail.com",
      },
      areaServed: page.cities,
      serviceType: page.shortTitle,
      url: pageUrl,
    });
    document.head.appendChild(schema);
  }, [page, pageUrl]);

  return (
    <>
      <Navbar />

      <main>
        <section className="relative min-h-[72vh] flex items-center bg-charcoal overflow-hidden pt-28">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/50" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#ffffff,_transparent_35%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body mb-5"
              >
                <MapPin className="h-4 w-4" /> Serving the GTA & Ontario
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              >
                {page.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/75 font-body text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
              >
                {page.heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-7 py-4 rounded-md font-body font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Request a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="tel:6476853620"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-4 rounded-md font-body font-semibold hover:bg-white/10 transition-colors"
                >
                  Call 647-685-3620
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-cream rounded-xl p-8 border border-border"
              >
                <ShieldCheck className="h-10 w-10 text-secondary mb-5" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Reliable Workmanship</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  We focus on clean finishing, careful planning, and renovation work that improves the look, function, and value of your space.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-cream rounded-xl p-8 border border-border"
              >
                <Star className="h-10 w-10 text-secondary mb-5" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Premium Finishes</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  From tile lines to fixtures and final details, every finish is handled with care so the completed space feels polished.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-cream rounded-xl p-8 border border-border"
              >
                <MapPin className="h-10 w-10 text-secondary mb-5" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Local Service Areas</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  We serve homeowners across the GTA, Halton, Peel, York Region, Hamilton, and surrounding Ontario communities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">
                  What We Do
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
                  {page.shortTitle} Services
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                  PRT Renovations Inc. helps homeowners plan and complete renovation projects with a clear scope, clean work, and practical recommendations from start to finish.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {page.services.map((service) => (
                    <div key={service} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="font-body text-sm text-foreground">{service}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-border shadow-sm"
              >
                <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">
                  Our Process
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-6">
                  Simple, Clear, and Organized
                </h2>

                <div className="space-y-5">
                  {page.process.map((step, index) => (
                    <div key={step} className="flex gap-4">
                      <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="font-body text-muted-foreground leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">
                Service Areas
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                {page.shortTitle} Across the GTA
              </h2>
              <p className="text-muted-foreground font-body text-lg">
                We work with homeowners across major GTA and Ontario communities. Don’t see your city listed? Contact us and we’ll confirm availability.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {page.cities.map((city) => (
                <span key={city} className="bg-cream border border-border rounded-full px-5 py-2 font-body text-sm text-foreground">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
};

export default ServiceLandingPage;
