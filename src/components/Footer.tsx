// src/components/Footer.tsx

import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.24 8.24 0 0 0 4.76 1.51v-3.5a4.84 4.84 0 0 1-1-.18z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
    <div className="container mx-auto px-4">
      {/* CHANGED: Swapped from grid-cols-4 to grid-cols-5 on large screens to fit the new column */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
        <div className="lg:col-span-2">
          <img src={logo} alt="PRT Renovations" className="h-16 w-auto mb-4 brightness-0 invert" />
          <p className="font-body text-sm leading-relaxed text-primary-foreground/50 max-w-sm">
            Premium renovations and construction services across Ontario. Built by brothers Parm & Raj Thiara with a commitment to quality that lasts.
          </p>
          
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/prt.renovations/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-secondary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@prt.renovations?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-secondary transition-colors">
              <TikTokIcon />
            </a>
            <a href="https://www.facebook.com/people/PRT-Renovations-Inc/61585491564425/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-secondary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Services", "Projects", "About", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block font-body text-sm text-primary-foreground/50 hover:text-secondary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* ADDED: Areas Served column for local SEO */}
        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Areas Served</h4>
          <div className="space-y-2 font-body text-sm text-primary-foreground/50">
            <p>Toronto (GTA)</p>
            <p>Mississauga</p>
            <p>Brampton</p>
            <p>Oakville & Burlington</p>
            <p>Vaughan & Markham</p>
            <p>Hamilton Region</p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
          <div className="space-y-3 font-body text-sm text-primary-foreground/50">
            <p>📞 <a href="tel:6476853620" className="hover:text-secondary transition-colors">647-685-3620</a></p>
            <p>✉️ <a href="mailto:prtrenovationsinc@gmail.com" className="hover:text-secondary transition-colors truncate block">prtrenovationsinc@gmail.com</a></p>
            
            <div className="pt-2">
              <p className="font-semibold text-primary-foreground/70 mb-1">Business Hours:</p>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat - Sun: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} PRT Renovations Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
