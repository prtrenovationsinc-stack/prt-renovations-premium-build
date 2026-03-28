// src/components/AreasWeServe.tsx

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Greater Toronto Area",
    cities: ["Toronto", "Mississauga", "Brampton", "Etobicoke", "Scarborough"]
  },
  {
    name: "Halton & Peel",
    cities: ["Oakville", "Burlington", "Milton", "Halton Hills", "Caledon"]
  },
  {
    name: "York Region",
    cities: ["Vaughan", "Markham", "Richmond Hill", "Aurora", "Newmarket"]
  },
  {
    name: "Hamilton & Niagara",
    cities: ["Hamilton", "Stoney Creek", "Ancaster", "Grimsby", "St. Catharines"]
  },
  {
    name: "Kitchener & Beyond",
    cities: ["Kitchener", "Waterloo", "Cambridge", "Guelph", "Brantford"]
  },
  {
    name: "Durham Region",
    cities: ["Pickering", "Ajax", "Whitby", "Oshawa", "Bowmanville"]
  }
];

const AreasWeServe = () => (
  <section className="section-padding bg-slate-50 border-t border-slate-200">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body flex items-center justify-center gap-2 mb-3">
          <MapPin className="h-4 w-4" /> Service Areas
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-4">
          Proudly Serving All of Ontario
        </h2>
        <p className="text-slate-600 font-body max-w-2xl mx-auto text-lg">
          Whether you are right in the heart of Toronto or in the surrounding regions, our team travels far and wide to bring premium renovation services to your doorstep.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {regions.map((region, idx) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <h3 className="font-display text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
              {region.name}
            </h3>
            <ul className="space-y-2">
              {region.cities.map((city) => (
                <li key={city} className="flex items-center gap-2 text-slate-600 font-body text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                  {city}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-slate-500 font-body text-sm italic">
          Don't see your city listed? If you are in Ontario, chances are we serve your area. <a href="#quote" className="text-secondary hover:underline font-semibold">Contact us to confirm!</a>
        </p>
      </motion.div>
    </div>
  </section>
);

export default AreasWeServe;
