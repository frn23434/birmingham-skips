import { Truck } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Header() {
  const whatsappNumber = "447900717881";
  const whatsappMessage = encodeURIComponent("Hi, I'd like to enquire about skip hire in Wolverhampton.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Truck className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-xl font-bold text-foreground">Wolverhampton Skips</h2>
              <p className="text-xs text-muted-foreground">Skip Hire Services</p>
            </div>
          </div>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            data-testid="link-header-whatsapp"
          >
            <SiWhatsapp className="h-4 w-4" />
            Message on WhatsApp
          </a>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden text-green-600"
            data-testid="link-header-mobile-whatsapp"
          >
            <SiWhatsapp className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
