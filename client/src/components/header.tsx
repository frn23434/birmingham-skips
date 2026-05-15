import { ChevronDown, MapPin, Truck } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const whatsappNumber = "447900717881";
  const whatsappMessage = encodeURIComponent("Hi, I'd like to enquire about skip hire in Birmingham.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3" data-testid="link-header-home-logo">
            <Truck className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-xl font-bold text-foreground">Birmingham Skips</h2>
              <p className="text-xs text-muted-foreground">Skip Hire Services</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden sm:inline-flex items-center gap-2"
                  data-testid="button-header-locations"
                >
                  <MapPin className="h-4 w-4" />
                  Locations
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56" data-testid="menu-header-locations">
                <DropdownMenuLabel>Browse Locations</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/" data-testid="link-menu-location-birmingham">
                    Skip Hire in Birmingham
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/skip-hire-in-tettenhall" data-testid="link-menu-location-tettenhall">
                    Skip Hire in Tettenhall
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="sm:hidden"
                  data-testid="button-header-locations-mobile"
                  aria-label="Open locations menu"
                >
                  <MapPin className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56" data-testid="menu-header-locations-mobile">
                <DropdownMenuLabel>Browse Locations</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/" data-testid="link-menu-mobile-location-birmingham">
                    Skip Hire in Birmingham
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/skip-hire-in-tettenhall" data-testid="link-menu-mobile-location-tettenhall">
                    Skip Hire in Tettenhall
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
      </div>
    </header>
  );
}
