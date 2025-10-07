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
      <section className="hero-pattern py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Glasgow Electrical Services
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                NICEIC approved electricians available 24/7 for emergencies across Glasgow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-green-50 text-lg px-8"
                  asChild
                  data-testid="button-call"
                >
                  <a href="tel:01411234567">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 0141 123 4567
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
                    Get Quote
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <Shield className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">NICEIC Approved</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <Clock className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">24/7 Service</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">Trusted</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <Zap className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">Expert Team</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Electrical Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive electrical solutions for homes and businesses across Glasgow</p>
          </div>
          
          {/* Service Images Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={emergencyImage} 
                alt="Emergency electrical repairs Glasgow - 24/7 emergency electrician service" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid="img-emergency-service"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                <Zap className="h-10 w-10 text-white mb-3" />
                <h3 className="text-white font-bold text-2xl mb-2">Emergency Repairs</h3>
                <p className="text-white/90">24/7 rapid response across Glasgow</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={panelImage} 
                alt="Electrical panel installation and fuse board upgrades Glasgow - NICEIC electrician" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid="img-panel-service"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                <Zap className="h-10 w-10 text-white mb-3" />
                <h3 className="text-white font-bold text-2xl mb-2">Panel & Fuse Boards</h3>
                <p className="text-white/90">Modern upgrades & installations</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={lightingImage} 
                alt="Lighting installation and electrical wiring Glasgow - professional electrician installer" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid="img-lighting-service"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                <Zap className="h-10 w-10 text-white mb-3" />
                <h3 className="text-white font-bold text-2xl mb-2">Lighting Solutions</h3>
                <p className="text-white/90">Design & installation services</p>
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Complete Electrical Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service) => (
                <div 
                  key={service} 
                  className="flex items-center gap-3 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors"
                  data-testid={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <img 
                src={electricianWorkImage} 
                alt="Professional Glasgow electrician working on electrical panel - expert electrical repair services" 
                className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
                data-testid="img-electrician-work"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Glasgow Electrical Services provides professional electrical services to homes and businesses across Glasgow and surrounding areas. Our NICEIC approved electricians are available 24/7 for emergency call-outs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">NICEIC Approved</h3>
                    <p className="text-muted-foreground">Fully certified and qualified electricians you can trust</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">24/7 Emergency Service</h3>
                    <p className="text-muted-foreground">Available any time, day or night for urgent repairs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quality Workmanship</h3>
                    <p className="text-muted-foreground">Experienced team delivering reliable service across Glasgow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Professional electrical services across Glasgow and surrounding areas</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-8">
            {serviceAreas.map((area) => (
              <div 
                key={area} 
                className="flex items-center gap-3 p-4 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
                data-testid={`area-${area.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-lg">
              And all surrounding areas across Greater Glasgow
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Contact us today for a free quote or emergency assistance</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Call Us</h3>
              <a href="tel:01411234567" className="text-2xl font-bold text-primary hover:underline block mb-2" data-testid="link-phone">
                0141 123 4567
              </a>
              <p className="text-muted-foreground text-sm">Available 24/7</p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Email Us</h3>
              <a href="mailto:info@glasgowelectrical.co.uk" className="text-lg text-primary hover:underline block mb-2" data-testid="link-email">
                info@glasgowelectrical.co.uk
              </a>
              <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
            </div>

            <div className="bg-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Service Area</h3>
              <p className="text-lg font-medium mb-2">Glasgow & Surrounding Areas</p>
              <p className="text-muted-foreground text-sm">All major districts covered</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-12 text-center text-white">
            <Clock className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">24/7 Emergency Service</h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Power outage, faulty wiring, or urgent electrical fault? We're here to help any time, day or night.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-green-50 text-xl px-12 py-6 h-auto"
              asChild
              data-testid="button-emergency"
            >
              <a href="tel:01411234567">
                <Phone className="mr-3 h-6 w-6" />
                Emergency: 0141 123 4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
