import Header from "@/components/header";
import Footer from "@/components/footer";
import { MapPin, Truck, Shield, Clock, CheckCircle, Recycle, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Home() {
  const whatsappNumber = "447900717881";
  const whatsappMessage = encodeURIComponent("Hi, I'd like to enquire about skip hire in Wolverhampton.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const skipSizes = [
    {
      name: "Mini Skip",
      size: "2-3 Cubic Yards",
      description: "Perfect for small home projects and garden clearances",
      capacity: "Holds approx. 25-35 bin bags",
      ideal: "Small DIY projects, garden waste"
    },
    {
      name: "Midi Skip",
      size: "4-5 Cubic Yards",
      description: "Great for medium-sized home renovations and clearouts",
      capacity: "Holds approx. 40-50 bin bags",
      ideal: "Kitchen/bathroom refits, moderate clearouts"
    },
    {
      name: "Builder's Skip",
      size: "6-8 Cubic Yards",
      description: "The most popular choice for construction and large projects",
      capacity: "Holds approx. 60-80 bin bags",
      ideal: "Building work, major renovations"
    },
    {
      name: "Large Skip",
      size: "10-12 Cubic Yards",
      description: "Ideal for commercial projects and major clearances",
      capacity: "Holds approx. 100-120 bin bags",
      ideal: "Commercial waste, house clearances"
    },
    {
      name: "Maxi Skip",
      size: "14-16 Cubic Yards",
      description: "Our largest option for industrial and commercial use",
      capacity: "Holds approx. 140-160 bin bags",
      ideal: "Industrial projects, large commercial sites"
    }
  ];

  const serviceAreas = [
    "Wolverhampton City Centre",
    "Bilston",
    "Wednesfield",
    "Tettenhall",
    "Penn",
    "Willenhall",
    "Dudley",
    "Walsall",
  ];

  const features = [
    "Same Day Delivery Available",
    "Competitive Prices",
    "All Skip Sizes Available",
    "Reliable Collection",
    "Fully Licensed & Insured",
    "Eco-Friendly Disposal",
    "Permit Assistance",
    "Flexible Hire Periods",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-pattern py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Wolverhampton Skips
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8" data-testid="text-hero-subtitle">
                Fast, reliable skip hire services across Wolverhampton and the West Midlands. All sizes available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 text-white hover:bg-green-700 text-lg px-8"
                  asChild
                  data-testid="button-whatsapp-hero"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="mr-2 h-5 w-5" />
                    Message on WhatsApp
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8"
                  asChild
                  data-testid="button-skip-sizes"
                >
                  <a href="#skip-sizes">
                    <Truck className="mr-2 h-5 w-5" />
                    View Skip Sizes
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <Shield className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">Fully Licensed</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <Clock className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">Same Day Delivery</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">Reliable Service</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <Recycle className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">Eco-Friendly</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skip Sizes Section */}
      <section id="skip-sizes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-sizes-title">Our Skip Sizes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the right skip size for your project. Not sure which size you need? Message us on WhatsApp and we'll help!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skipSizes.map((skip, index) => (
              <div 
                key={skip.name}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                data-testid={`card-skip-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{skip.name}</h3>
                    <p className="text-primary font-semibold">{skip.size}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{skip.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{skip.capacity}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ideal for: {skip.ideal}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-green-600 text-white hover:bg-green-700 gap-2"
              asChild
              data-testid="button-enquire-sizes"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="h-5 w-5" />
                Get a Quote on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" data-testid="text-why-title">Why Choose Wolverhampton Skips?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're the trusted skip hire company in Wolverhampton and the West Midlands. With competitive prices, reliable service, and a range of skip sizes to suit any project, we make waste disposal simple.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Fully Licensed & Insured</h3>
                    <p className="text-muted-foreground">All our waste is disposed of responsibly and legally</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Fast Delivery & Collection</h3>
                    <p className="text-muted-foreground">Same day delivery available across Wolverhampton</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <Recycle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Eco-Friendly Disposal</h3>
                    <p className="text-muted-foreground">We recycle as much waste as possible to protect the environment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">What We Offer</h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div 
                    key={feature} 
                    className="flex items-center gap-2 p-3 bg-white dark:bg-card rounded-lg"
                    data-testid={`feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-areas-title">Areas We Cover</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Skip hire services across Wolverhampton and the surrounding West Midlands area</p>
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
            <p className="text-muted-foreground text-lg mb-6">
              And all surrounding areas across the West Midlands
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-12 text-center text-white">
            <SiWhatsapp className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4" data-testid="text-cta-title">Get Your Skip Quote Today</h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Ready to book a skip? Message us on WhatsApp for a fast, free quote. We'll get back to you right away!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-green-50 text-xl px-12 py-6 h-auto"
              asChild
              data-testid="button-cta-whatsapp"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-3 h-6 w-6" />
                Message on WhatsApp
              </a>
            </Button>
            <p className="text-green-100 mt-4 text-sm">07900 717881</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
