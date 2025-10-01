import { Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Wrench className="text-primary text-xl mr-2" />
              <h3 className="text-lg font-semibold text-foreground">Bradford Plumbing</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted directory for finding qualified plumbers across Bradford and surrounding areas.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Find a Plumber
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Popular Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Boiler Repairs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Bathroom Fitting
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Leak Detection
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gas Safety
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <i className="fas fa-envelope mr-2"></i>
                info@bradfordplumbing.co.uk
              </li>
              <li className="text-sm text-muted-foreground">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Bradford, West Yorkshire
              </li>
              <li className="text-sm text-muted-foreground">
                <i className="fas fa-clock mr-2"></i>
                Mon-Fri: 9am - 6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 BradfordPlumbing.co.uk. All rights reserved. |{" "}
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
