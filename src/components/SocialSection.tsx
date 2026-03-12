import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.24 8.24 0 0 0 4.76 1.51v-3.5a4.84 4.84 0 0 1-1-.18z" />
  </svg>
);

const SocialSection = () => (
  <section className="py-16 px-4">
    <div className="container mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Follow Our Work</h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto mb-8">
          See our latest projects, behind-the-scenes work, and transformations on social media.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com/prtrenovations"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-muted hover:bg-border rounded-full px-6 py-3 transition-colors group"
          >
            <Instagram className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
            <span className="font-body font-medium text-foreground">Instagram</span>
          </a>
          <a
            href="https://tiktok.com/@prtrenovations"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-muted hover:bg-border rounded-full px-6 py-3 transition-colors group"
          >
            <div className="text-primary group-hover:text-secondary transition-colors"><TikTokIcon /></div>
            <span className="font-body font-medium text-foreground">TikTok</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SocialSection;
