import { Phone, MessageSquare } from "lucide-react";

const FloatingCTA = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
    <a
      href="tel:6476853620"
      className="w-14 h-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <Phone className="h-6 w-6" />
    </a>
    <a
      href="#quote"
      className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingCTA;
