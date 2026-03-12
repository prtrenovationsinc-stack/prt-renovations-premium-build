import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.24 8.24 0 0 0 4.76 1.51v-3.5a4.84 4.84 0 0 1-1-.18z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <img src={logo} alt="PRT Renovations" className="h-16 w-auto mb-4 brightness-0 invert" />
          <p className="font-body text-sm leading-relaxed text-primary-foreground/50">
            Premium renovations and construction services across Ontario. Built by brothers Parm & Raj Thiara with a commitment to quality that lasts.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Services", "Projects", "About", "Process", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block font-body text-sm text-primary-foreground/50 hover:text-secondary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Services</h4>
          <div className="space-y-2">
            {["Bathroom Renovations", "Kitchen Renovations", "Basement Builds", "Tile Installation", "Decks & Patios", "Commercial Renovations"].map((s) => (
              <a key={s} href="#services" className="block font-body text-sm text-primary-foreground/50 hover:text-secondary transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
          <div className="space-y-3 font-body text-sm text-primary-foreground/50">
            <p>📞 <a href="tel:6476853620" className="hover:text-secondary transition-colors">647-685-3620</a></p>
            <p>✉️ <a href="mailto:info@prtrenovations.ca" className="hover:text-secondary transition-colors">info@prtrenovations.ca</a></p>
            <p>📍 Ontario, Canada</p>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="https://instagram.com/prtrenovations" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-secondary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://tiktok.com/@prtrenovations" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-secondary transition-colors">
              <TikTokIcon />
            </a>
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
