// src/components/TestimonialsSection.tsx

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  { name: "Sarah M.", location: "Mississauga, ON", text: "PRT Renovations completely transformed our master bathroom. The attention to detail was incredible — from the tile work to the fixtures, everything looks like it belongs in a design magazine. Highly recommend!", rating: 5 },
  { name: "David & Lisa K.", location: "Brampton, ON", text: "We hired PRT for a full basement finish and couldn't be happier. The team was professional, on schedule, and the quality is outstanding. Our basement is now the best room in the house.", rating: 5 },
  { name: "James R.", location: "Toronto, ON", text: "As a commercial property owner, I need contractors I can trust. PRT delivered a flawless renovation of our office space — on time and on budget. They're our go-to team now.", rating: 5 },
  { name: "Priya S.", location: "Oakville, ON", text: "From the initial consultation to the final walkthrough, Parm and Raj were exceptional. Our kitchen renovation exceeded every expectation. The craftsmanship speaks for itself.", rating: 5 },
  { name: "Michael T.", location: "Hamilton, ON", text: "PRT built us a beautiful deck and patio area. Their design ideas were spot on and the build quality is rock solid. We've already recommended them to three neighbors.", rating: 5 },
  { name: "Angela W.", location: "Burlington, ON", text: "We renovated two bathrooms with PRT and the results are stunning. Clean, professional, and truly premium quality. Worth every penny.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-slate-50 overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm tracking-[0.15em] uppercase font-body">Client Reviews</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">What Our Clients Say</h2>
        <p className="text-slate-600 font-body max-w-2xl mx-auto text-lg">Real feedback from homeowners and business owners across Ontario.</p>
      </motion.div>

      {/* The New Interactive Carousel */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full bg-white rounded-xl p-6 shadow-sm border border-slate-100 transition-shadow duration-300 hover:shadow-md flex flex-col">
                  {/* Google Sub-Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                      alt="Google" 
                      className="w-5 h-5"
                    />
                    <span className="text-slate-500 font-medium text-sm font-body">Google Review</span>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold font-display text-lg shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-body leading-tight">{t.name}</h4>
                      <p className="text-slate-500 font-body text-xs mt-0.5">{t.location}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 font-body text-sm leading-relaxed flex-grow">
                    "{t.text}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 md:-left-12 h-10 w-10 bg-white hover:bg-slate-100 text-slate-800 shadow-md border-slate-200" />
          <CarouselNext className="-right-2 md:-right-12 h-10 w-10 bg-white hover:bg-slate-100 text-slate-800 shadow-md border-slate-200" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
