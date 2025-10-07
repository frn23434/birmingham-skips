import { Zap, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Zap className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-xl font-bold text-foreground">Glasgow Electrical Services</h2>
              <p className="text-xs text-muted-foreground">Professional Electrical Services</p>
            </div>
          </div>

          <a 
            href="tel:01411234567" 
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            data-testid="link-header-call"
          >
            <Phone className="h-4 w-4" />
            0141 123 4567
          </a>

          <a 
            href="tel:01411234567" 
            className="md:hidden text-foreground"
            data-testid="link-header-mobile-call"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
