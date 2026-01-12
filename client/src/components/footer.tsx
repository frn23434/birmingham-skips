import { Truck, Facebook, Instagram, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const whatsappNumber = "447900717881";
  const whatsappMessage = encodeURIComponent("Hi, I'd like to enquire about skip hire in Wolverhampton.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="text-primary text-xl mr-2" />
              <h3 className="text-lg font-semibold text-foreground">Wolverhampton Skips</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional skip hire services in Wolverhampton and surrounding areas. Fast delivery and collection.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Skip Sizes</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground" data-testid="link-footer-mini">
                  Mini Skip (2-3 Yards)
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground" data-testid="link-footer-midi">
                  Midi Skip (4-5 Yards)
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground" data-testid="link-footer-builder">
                  Builder's Skip (6-8 Yards)
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground" data-testid="link-footer-large">
                  Large Skip (10-16 Yards)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground" data-testid="link-footer-domestic">
                  Domestic Skip Hire
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground" data-testid="link-footer-commercial">
                  Commercial Skip Hire
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground" data-testid="link-footer-waste">
                  Waste Removal
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground" data-testid="link-footer-recycling">
                  Recycling Services
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <SiWhatsapp className="h-4 w-4 text-green-600" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-footer-whatsapp">Message on WhatsApp</a>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2" data-testid="text-footer-location">
                <MapPin className="h-4 w-4" />
                Wolverhampton, West Midlands
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2" data-testid="text-footer-hours">
                <Clock className="h-4 w-4" />
                Mon-Sat: 7am - 6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Wolverhampton Skips. All rights reserved. |{" "}
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-terms">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
