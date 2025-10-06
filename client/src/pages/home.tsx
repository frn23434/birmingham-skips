import Header from "@/components/header";
import Footer from "@/components/footer";
import { Phone, Mail, MapPin, Wrench, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumberImage1 from "@assets/stock_images/professional_plumber_f76d645e.jpg";
import plumberImage2 from "@assets/stock_images/professional_plumber_85e38b42.jpg";
import boilerImage from "@assets/stock_images/boiler_installation__f4c1d23e.jpg";
import bathroomImage from "@assets/stock_images/bathroom_plumbing_si_c6369c0e.jpg";
import emergencyImage from "@assets/stock_images/emergency_plumbing_t_094bc9f8.jpg";

export default function Home() {
  const services = [
    "Emergency Repairs",
    "Boiler Installation & Service",
    "Bathroom Fitting",
    "Leak Repairs",
    "Drain Unblocking",
    "Central Heating",
    "Gas Safety Checks",
    "Radiator Installation",
  ];

  const serviceAreas = [
    "Newport",
    "Ryde",
    "Cowes",
    "East Cowes",
    "Sandown",
    "Shanklin",
    "Ventnor",
    "Bembridge",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-pattern py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Isle of Wight Plumbing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional plumbing services across the Isle of Wight. Gas Safe registered engineers available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8"
                asChild
                data-testid="button-call"
              >
                <a href="tel:01983123456">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 01983 123456
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8"
                asChild
                data-testid="button-email"
              >
                <a href="mailto:info@isleofwightplumbing.co.uk">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive plumbing solutions for all your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div 
                key={service} 
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
                data-testid={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Wrench className="h-5 w-5 text-primary flex-shrink-0" />
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
            <p className="text-lg text-muted-foreground">Serving the entire Isle of Wight</p>
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
            And surrounding areas across the Isle of Wight
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
                    <a href="tel:01983123456" className="text-primary hover:underline" data-testid="link-phone">
                      01983 123456
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Mobile</p>
                    <a href="tel:07700123456" className="text-primary hover:underline" data-testid="link-mobile">
                      07700 123456
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@isleofwightplumbing.co.uk" className="text-primary hover:underline" data-testid="link-email">
                      info@isleofwightplumbing.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Serving all of Isle of Wight</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="font-semibold text-xl mb-4">Emergency Service Available</h3>
              <p className="text-muted-foreground mb-6">
                We provide 24/7 emergency plumbing services across the Isle of Wight. Whether it's a burst pipe, boiler breakdown, or urgent leak, we're here to help.
              </p>
              <Button 
                size="lg" 
                className="w-full"
                asChild
                data-testid="button-emergency"
              >
                <a href="tel:01983123456">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Emergency: 01983 123456
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
