import Header from "@/components/header";
import Footer from "@/components/footer";
import { Phone, Mail, MapPin, Zap, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import electricianWorkImage from "@assets/stock_images/professional_electri_1adefa04.jpg";
import panelImage from "@assets/stock_images/electrical_panel_ins_d0a73891.jpg";
import lightingImage from "@assets/stock_images/home_lighting_instal_66d40936.jpg";
import emergencyImage from "@assets/stock_images/emergency_electrical_006111ad.jpg";

export default function Home() {
  const services = [
    "Emergency Repairs",
    "Electrical Installation",
    "Complete Rewiring",
    "Lighting Installation",
    "Fuse Board Upgrades",
    "Electrical Testing",
    "NICEIC Certification",
    "Socket & Switch Installation",
  ];

  const serviceAreas = [
    "Glasgow City Centre",
    "West End",
    "South Side",
    "East End",
    "Partick",
    "Dennistoun",
    "Shawlands",
    "Pollokshields",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-pattern py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Glasgow Electrical Services
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Professional electrical services across Glasgow. NICEIC approved electricians available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-green-50 text-lg px-8"
                asChild
                data-testid="button-call"
              >
                <a href="tel:01411234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 0141 123 4567
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8"
                asChild
                data-testid="button-email"
              >
                <a href="mailto:info@glasgowelectrical.co.uk">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Trusted Electrical Experts in Glasgow</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Glasgow Electrical Services provides professional electrical services to homes and businesses across Glasgow and surrounding areas. Our NICEIC approved electricians are available 24/7 for emergency call-outs.
              </p>
              <p className="text-lg text-muted-foreground">
                From emergency repairs to complete rewiring, our experienced team delivers quality workmanship and reliable service throughout Glasgow City Centre, West End, South Side, East End, and all areas of Glasgow.
              </p>
            </div>
            <div className="relative">
              <img 
                src={electricianWorkImage} 
                alt="Professional Glasgow electrician working on electrical panel - expert electrical repair services" 
                className="rounded-lg shadow-xl w-full h-auto"
                data-testid="img-electrician-work"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">NICEIC Approved</h3>
              <p className="text-sm text-muted-foreground">Fully certified and qualified electricians</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-sm text-muted-foreground">Available any time, day or night</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Trusted & Reliable</h3>
              <p className="text-sm text-muted-foreground">Highly rated local service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive electrical solutions for all your needs</p>
          </div>
          
          {/* Service Images Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={emergencyImage} 
                alt="Emergency electrical repairs Glasgow - 24/7 emergency electrician service" 
                className="w-full h-64 object-cover"
                data-testid="img-emergency-service"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Emergency Repairs</h3>
                <p className="text-white/90 text-sm">24/7 availability across Glasgow</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={panelImage} 
                alt="Electrical panel installation and fuse board upgrades Glasgow - NICEIC electrician" 
                className="w-full h-64 object-cover"
                data-testid="img-panel-service"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Panel & Fuse Boards</h3>
                <p className="text-white/90 text-sm">Installation, upgrades & testing</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={lightingImage} 
                alt="Lighting installation and electrical wiring Glasgow - professional electrician installer" 
                className="w-full h-64 object-cover"
                data-testid="img-lighting-service"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Lighting Installation</h3>
                <p className="text-white/90 text-sm">Complete lighting solutions</p>
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div 
                key={service} 
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
                data-testid={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas We Cover</h2>
            <p className="text-lg text-muted-foreground">Serving Glasgow and surrounding areas</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <div 
                key={area} 
                className="flex items-center gap-2 p-3 bg-background border border-border rounded-lg"
                data-testid={`area-${area.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground">
            And surrounding areas across Glasgow
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">Contact us today for a free quote or emergency assistance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-semibold text-xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:01411234567" className="text-primary hover:underline" data-testid="link-phone">
                      0141 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Mobile</p>
                    <a href="tel:07700987654" className="text-primary hover:underline" data-testid="link-mobile">
                      07700 987654
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@glasgowelectrical.co.uk" className="text-primary hover:underline" data-testid="link-email">
                      info@glasgowelectrical.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Serving all of Glasgow</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="font-semibold text-xl mb-4">Emergency Service Available</h3>
              <p className="text-muted-foreground mb-6">
                We provide 24/7 emergency electrical services across Glasgow. Whether it's a power outage, faulty wiring, or urgent electrical fault, we're here to help.
              </p>
              <Button 
                size="lg" 
                className="w-full"
                asChild
                data-testid="button-emergency"
              >
                <a href="tel:01411234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Emergency: 0141 123 4567
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
