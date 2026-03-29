// src/pages/Links.tsx
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, FileText, Instagram, Globe } from "lucide-react"; // Changed LayoutGrid to Instagram
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
          <Button className="w-full h-20 text-xl bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center gap-3 font-bold shadow-md">
            <Phone size={28} />
            CALL PARM
          </Button>
        </a>

        {/* Call Raj */}
        <a href="tel:6473918530" className="block w-full">
          <Button className="w-full h-20 text-xl bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center gap-3 font-bold shadow-md">
            <Phone size={28} />
            CALL RAJ
          </Button>
        </a>

        {/* WhatsApp Button */}
        <a href="https://wa.me/16476853620" className="block w-full">
          <Button className="w-full h-20 text-xl bg-white text-black hover:bg-zinc-200 rounded-2xl flex items-center justify-center gap-3 border-none font-bold shadow-md">
            <MessageSquare size={28} />
            WHATSAPP US
          </Button>
        </a>

        {/* Quote Form Button */}
        <a href="/#quote" className="block w-full">
          <Button className="w-full h-20 text-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-md">
            <FileText size={28} />
            GET A FREE QUOTE
          </Button>
        </a>

        {/* Instagram Link with Gradient */}
        <a href="https://www.instagram.com/prt.renovations/" target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button className="w-full h-20 text-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white border-none rounded-2xl flex items-center justify-center gap-3 font-bold shadow-md">
            <Instagram size={28} />
            INSTAGRAM
          </Button>
        </a>

        {/* The "Exit" to the main site - Now a Blue Bubble */}
        <div className="pt-8 flex justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-sm font-bold shadow-lg transition-transform hover:scale-105 bg-[#1f2a78]"
          >
            <Globe size={18} />
            Visit Full Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
