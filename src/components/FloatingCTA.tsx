// src/components/FloatingCTA.tsx

import { Phone, ClipboardList } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Shows the bar after they scroll down a bit past the hero section
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* MOBILE: Sticky Bottom Bar (50/50 split) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <a
          href="tel:6476853620"
          className="flex-1 bg-slate-900 text-white flex items-center justify-center gap-2 py-4 font-body font-semibold text-sm border-r border-white/10 active:bg-slate-800 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call Us
        </a>
        <a
          href="#quote"
          className="flex-1 bg-secondary text-secondary-foreground flex items-center justify-center gap-2 py-4 font-body font-semibold text-sm active:bg-secondary/90 transition-colors"
        >
          <ClipboardList className="h-4 w-4" />
          Get a Quote
        </a>
      </div>

      {/* DESKTOP: Floating Quote Button in bottom right */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-fade-in">
        <a
          href="#quote"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl flex items-center gap-3 px-6 py-4 rounded-full font-body font-bold transition-transform hover:scale-105"
        >
          <ClipboardList className="h-5 w-5" />
          Request a Free Quote
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;
