// src/pages/Links.tsx
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, FileText, LayoutGrid, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      {/* Business Identity */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter mb-2">PRT Renovations Inc.</h1>
        <p className="text-zinc-300">Premium Home Transformations</p>
      </div>

      {/* The Big Action Buttons */}
      <div className="w-full max-w-sm space-y-4">
        
        {/* Call Parm */}
        <a href="tel:6472947766" className="block w-full">
          <Button className="w-full h-20 text-xl bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center gap-3 font-bold">
            <Phone size={28} />
            CALL US NOW (PARM)
          </Button>
        </a>

        {/* Call Raj */}
        <a href="tel:6473918530" className="block w-full">
          <Button className="w-full h-20 text-xl bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center gap-3 font-bold">
            <Phone size={28} />
            CALL US NOW (RAJ)
          </Button>
        </a>

        {/* WhatsApp Button */}
        <a href="https://wa.me/16476853620" className="block w-full">
          <Button className="w-full h-20 text-xl bg-white text-black hover:bg-zinc-200 rounded-2xl flex items-center justify-center gap-3 border-none font-bold">
            <MessageSquare size={28} />
            WHATSAPP US
          </Button>
        </a>

        {/* Quote Form Button */}
        <a href="/#quote" className="block w-full">
          <Button className="w-full h-20 text-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-2xl flex items-center justify-center gap-3 font-bold">
            <FileText size={28} />
            GET A FREE QUOTE
          </Button>
        </a>

        {/* Portfolio Link - Fixed Visibility */}
        <a href="/#projects" className="block w-full">
          <Button className="w-full h-20 text-xl bg-zinc-800 text-white hover:bg-zinc-700 border-2 border-zinc-600 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-sm">
            <LayoutGrid size={28} />
            OUR RECENT WORK
          </Button>
        </a>

        {/* The "Exit" to the main site */}
        <div className="pt-8 text-center">
          <Link to="/" className="text-zinc-400 underline flex items-center justify-center gap-2 hover:text-white transition-colors">
            <Globe size={18} />
            Visit Full Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
