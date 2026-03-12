import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Large centered logo overlay - visible before scroll */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.6, y: -40 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-[60] flex justify-center pointer-events-none"
          >
            <a href="#hero" className="pointer-events-auto">
              <img src={logo} alt="PRT Renovations Inc." className="h-36 md:h-48 w-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <a href="#hero" className="flex items-center gap-2">
            <motion.img
              src={logo}
              alt="PRT Renovations Inc."
              className="w-auto"
              animate={{ height: scrolled ? 56 : 0, opacity: scrolled ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:6476853620" className={`flex items-center gap-2 text-sm font-medium ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            <Phone className="h-4 w-4" />
            647-685-3620
          </a>
          <a href="#quote">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6">
              Request a Quote
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground font-medium py-2 border-b border-border"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:6476853620" className="flex items-center gap-2 text-foreground font-medium py-2">
              <Phone className="h-4 w-4" /> 647-685-3620
            </a>
            <a href="#quote" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      )}
      </nav>
    </>
  );
};

export default Navbar;
