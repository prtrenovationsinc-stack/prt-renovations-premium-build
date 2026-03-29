// src/pages/Links.tsx
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, FileText, Instagram, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png"; 

const Links = () => {
  return (
    <div className="h-[100dvh] overflow-hidden bg-black text-white flex flex-col items-center justify-center px-4 py-4">
      
      {/* Business Identity - Tighter White Bubble */}
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-3xl p-3 shadow-xl inline-flex justify-center">
          <img 
            src={logo} 
            alt="PRT Renovations" 
            className="h-20 w-auto object-contain" 
          />
        </div>
      </div>

      {/* The Big Action Buttons */}
      <div className="w-full max-w-sm space-y-3">
        
        {/* Call Parm */}
        <a href="tel:6472947766" className="block w-full">
          <Button className="w-full h-16 text-lg bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center gap-3 font-bold shadow-md">
            <Phone size={24} />
            CALL PARM
          </Button>
        </a>

        {/* Call Raj */}
        <a href="tel:6473918530" className="block w-full">
          <Button className="w-full h-16 text-lg bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center gap-3 font-bold shadow-md">
            <Phone size={24} />
            CALL RAJ
          </Button>
        </a>

        {/* WhatsApp Button */}
        <a href="https://wa.me/16476853620" className="block w-full">
          <Button className="w-full h-16 text-lg bg-white text-black hover:bg-zinc-200 rounded-2xl flex items-center justify-center gap-3 border-none font-bold shadow-md">
            <MessageSquare size={24} />
            WHATSAPP US
          </Button>
        </a>

        {/* Quote Form Button */}
        <a href="/#quote" className="block w-full">
          <Button className="w-full h-16 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-md">
            <FileText size={24} />
            GET A FREE QUOTE
          </Button>
        </a>

        {/* Instagram Link with Gradient */}
        <a href="https://www.instagram.com/prt.renovations/" target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button className="w-full h-16 text-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white border-none rounded-2xl flex items-center justify-center gap-3 font-bold shadow-md">
            <Instagram size={24} />
            INSTAGRAM
          </Button>
        </a>

        {/* The "Exit" to the main site */}
        <div className="pt-4 flex justify-center w-full">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-white text-lg font-bold shadow-lg transition-transform hover:scale-105 bg-[#1f2a78]"
          >
            <Globe size={20} />
            VIEW WEBSITE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
