import { Wrench, Facebook, Twitter, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Wrench className="text-primary text-xl mr-2" />
              <h3 className="text-lg font-semibold text-foreground">London Plumbing Services</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional plumbing services across London. Gas Safe registered plumbers available 24/7.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-services">
                  Our Services
                </a>
              </li>
              <li>
                <a href="tel:02012345678" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-emergency">
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="/plumbers" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-areas">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Popular Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-boiler">
                  Boiler Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-bathroom">
                  Bathroom Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-heating">
                  Heating Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-leak">
                  Leak Detection
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:02012345678" className="hover:text-primary transition-colors" data-testid="link-footer-phone">020 1234 5678</a>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@londonplumbingservices.co.uk" className="hover:text-primary transition-colors" data-testid="link-footer-email">info@londonplumbingservices.co.uk</a>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2" data-testid="text-footer-location">
                <MapPin className="h-4 w-4" />
                London, UK
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2" data-testid="text-footer-hours">
                <Clock className="h-4 w-4" />
                24/7 Emergency Service
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 London Plumbing Services. All rights reserved. |{" "}
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
