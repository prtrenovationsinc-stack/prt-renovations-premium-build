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
        <p className="text-zinc-400">Premium Home Transformations</p>
      </div>

      {/* The Big Action Buttons */}
      <div className="w-full max-w-sm space-y-4">
        
        {/* Call Button - The #1 choice for your demographic */}
        <a href="tel:6475615783" className="block w-full">
          <Button className="w-full h-20 text-xl bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center gap-3">
            <Phone size={28} />
            CALL US NOW
          </Button>
        </a>

        {/* WhatsApp Button */}
        <a href="https://wa.me/16475615783" className="block w-full">
          <Button className="w-full h-20 text-xl bg-white text-black hover:bg-zinc-200 rounded-2xl flex items-center justify-center gap-3 border-none">
            <MessageSquare size={28} />
            WHATSAPP US
          </Button>
        </a>

        {/* Quote Form Button */}
        <Link to="/#quote" className="block w-full">
          <Button className="w-full h-20 text-xl bg-gold-500 hover:bg-gold-600 text-black rounded-2xl flex items-center justify-center gap-3">
            <FileText size={28} />
            GET A FREE QUOTE
          </Button>
        </Link>

        {/* Portfolio Link */}
        <Link to="/#projects" className="block w-full">
          <Button className="w-full h-20 text-xl variant-outline border-zinc-700 text-white hover:bg-zinc-900 rounded-2xl flex items-center justify-center gap-3">
            <LayoutGrid size={28} />
            OUR RECENT WORK
          </Button>
        </Link>

        {/* The "Exit" to the main site */}
        <div className="pt-8 text-center">
          <Link to="/" className="text-zinc-500 underline flex items-center justify-center gap-2 hover:text-white transition-colors">
            <Globe size={18} />
            Visit Full Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
