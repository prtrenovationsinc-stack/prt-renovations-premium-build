// src/components/HeroSection.tsx

import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Modern Kitchen Renovation"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider italic">
              Serving the Greater Toronto Area
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Premium Home <span className="text-primary italic">Renovations</span> Done Right.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            From high-end bathrooms to complete home transformations, we deliver unmatched craftsmanship and stress-free project management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-base font-semibold px-8 h-14"
              onClick={scrollToQuote}
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              /* CHANGED: Added explicit background, text color, and border to ensure visibility */
              className="text-base font-semibold px-8 h-14 bg-white/10 hover:bg-white hover:text-slate-900 text-white border-white/40"
              onClick={scrollToProjects}
            >
              View Our Work
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-400 mt-1">Trusted by 200+ homeowners</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
};
