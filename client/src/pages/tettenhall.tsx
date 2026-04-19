import Header from "@/components/header";
import Footer from "@/components/footer";
import { MapPin, Truck, Shield, Clock, CheckCircle, Recycle, Leaf, AlertCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useMetaTags } from "@/lib/use-meta-tags";
import { Link } from "wouter";

export default function Tettenhall() {
  const whatsappNumber = "447900717881";
  const whatsappMessage = encodeURIComponent("Hi, I'd like to enquire about skip hire in Tettenhall.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Update meta tags for this page
  useMetaTags({
    title: "Skip Hire Tettenhall | Fully Licensed & Eco-Friendly Waste Removal",
    description: "Professional skip hire in Tettenhall, Wolverhampton. All sizes, same day delivery, 95% waste recycled. Fully licensed, insured & approved. 07900 717881",
    keywords: "skip hire Tettenhall, skip hire in Tettenhall, Tettenhall skip hire, waste removal Tettenhall, skip rental Tettenhall, same day skip delivery Tettenhall, affordable skip hire Tettenhall",
    ogTitle: "Skip Hire Tettenhall | Fast & Reliable Waste Removal",
    ogDescription: "Professional skip hire in Tettenhall with same day delivery, all sizes available, eco-friendly disposal. Message for a quote!",
    twitterTitle: "Skip Hire Tettenhall | Wolverhampton",
    twitterDescription: "Fast skip hire in Tettenhall. Same day delivery, competitive prices. Message on WhatsApp!",
  });

  const skipSizes = [
    {
      name: "Mini Skip (2 Yard)",
      size: "2 Cubic Yards",
      description: "Perfect for small home projects and garden clearances in Tettenhall",
      capacity: "Holds approx. 25-35 bin bags",
      ideal: "Small DIY projects, garden waste, soil",
      duration: "Up to 3 days"
    },
    {
      name: "Midi Skip (3 Yard)",
      size: "3 Cubic Yards",
      description: "Great for medium-sized projects and small clearouts in Tettenhall",
      capacity: "Holds approx. 40-50 bin bags",
      ideal: "Small garden clearance, bathroom revamp",
      duration: "Up to 3 days"
    },
    {
      name: "Builder's Skip (4 Yard)",
      size: "4 Cubic Yards",
      description: "The most popular choice for construction and renovations across Tettenhall",
      capacity: "Holds approx. 60-80 bin bags",
      ideal: "Building work, garden renovation, extensions",
      duration: "Up to 7 days"
    },
    {
      name: "Large Skip (6 Yard)",
      size: "6 Cubic Yards",
      description: "Ideal for major projects and large clearances in Tettenhall",
      capacity: "Holds approx. 100-120 bin bags",
      ideal: "Large renovations, builder's waste",
      duration: "Up to 7 days"
    },
    {
      name: "Maxi Skip (8 Yard)",
      size: "8 Cubic Yards",
      description: "Our largest option for commercial and industrial use",
      capacity: "Holds approx. 140-160 bin bags",
      ideal: "Large commercial projects, clearances",
      duration: "Up to 10 days"
    }
  ];

  const acceptedWaste = [
    { item: "Garden Waste", icon: "🌿" },
    { item: "Soil & Brick", icon: "🧱" },
    { item: "Builder's Rubble", icon: "🔨" },
    { item: "Wood & Timber", icon: "🪵" },
    { item: "Plasterboard", icon: "📦" },
    { item: "Metal & Scrap", icon: "⚙️" },
    { item: "General Household", icon: "🏠" },
  ];

  const restrictedWaste = [
    "Hazardous materials",
    "Asbestos",
    "Fluorescent tubes",
    "Chemicals & oils"
  ];

  const serviceAreas = [
    "Tettenhall",
    "Penn",
    "Compton",
    "Merry Hill",
    "Codsall",
    "Wolverhampton City Centre",
    "Bilston",
    "Wednesfield",
  ];

  const features = [
    "Same Day Delivery Available",
    "Competitive Prices",
    "All Skip Sizes Available",
    "Reliable Collection",
    "Fully Licensed & Insured",
    "95% Waste Recycled",
    "Permit Assistance",
    "Flexible Hire Periods",
  ];

  const trustSignals = [
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      desc: "All waste handling complies with environmental regulations"
    },
    {
      icon: Recycle,
      title: "95% Waste Recycling",
      desc: "Our own waste sorting facility ensures responsible disposal"
    },
    {
      icon: Leaf,
      title: "Environmentally Approved",
      desc: "Regulated by the Environmental Agency"
    },
    {
      icon: Truck,
      title: "Professional Drivers",
      desc: "Trained, courteous drivers who care for your property"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-pattern py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-blue-100/90 mb-4 text-sm" data-testid="text-breadcrumb-home-link">
                <Link href="/" className="underline underline-offset-4 hover:text-white">
                  Skip Hire in Wolverhampton
                </Link>
                <span> / Skip Hire in Tettenhall</span>
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Skip Hire in Tettenhall
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4" data-testid="text-hero-subtitle">
                Fast, reliable skip hire services in Tettenhall. Same day delivery across the area with fully licensed, eco-friendly disposal.
              </p>
              <p className="text-lg text-blue-100 mb-8">
                Professional waste removal for domestic and commercial projects in Tettenhall and surrounding areas.
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
                    Get a Quote on WhatsApp
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
                  <h3 className="font-semibold">Same Day Available</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <Recycle className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">95% Recycled</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold">Reliable Service</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Wolverhampton Skips for Tettenhall?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We're your trusted local skip hire provider serving Tettenhall and the West Midlands with professional, eco-friendly waste disposal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal, idx) => {
              const Icon = signal.icon;
              return (
                <div 
                  key={idx}
                  className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{signal.title}</h3>
                  <p className="text-muted-foreground text-sm">{signal.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skip Sizes Section */}
      <section id="skip-sizes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skip Sizes Available in Tettenhall</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the right skip size for your project. We offer flexible hire periods from 3 to 10 days depending on the skip size.</p>
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
                <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{skip.capacity}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ideal for: {skip.ideal}</span>
                  </p>
                </div>
                <p className="flex items-start gap-2 text-sm font-medium">
                  <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Hire period: {skip.duration}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-green-600 text-white hover:bg-green-700 gap-2"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="h-5 w-5" />
                Get a Quote on WhatsApp
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground" data-testid="text-home-link-after-sizes">
              Need broader coverage?
              <Link href="/" className="ml-1 underline underline-offset-4 hover:text-foreground">
                View our Wolverhampton skip hire homepage
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Waste Types Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">What Waste Can We Take?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our skip hire services in Tettenhall accept a wide range of waste types. Whether you're clearing your garden, renovating your home, or managing a construction project, we have the right skip for you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {acceptedWaste.map((waste) => (
                  <div 
                    key={waste.item}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-card rounded-lg"
                  >
                    <span className="text-2xl">{waste.icon}</span>
                    <span className="font-medium">{waste.item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">What We Don't Accept</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To ensure safe and compliant waste disposal in Tettenhall, we cannot accept hazardous materials. This protects our team and the environment.
              </p>
              <div className="space-y-4">
                {restrictedWaste.map((item) => (
                  <div 
                    key={item}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-card rounded-lg border-l-4 border-red-500"
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                Not sure if something can be removed? Contact us on WhatsApp and we'll advise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Environmental Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Skip hire in Tettenhall with responsibility for the environment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <Recycle className="h-16 w-16 text-green-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-center mb-4">95% Waste Recycling Rate</h3>
              <p className="text-muted-foreground text-center mb-4">
                We operate our own licensed waste sorting facility in Wolverhampton. Every skip's contents are carefully sorted to maximize recycling and minimize landfill waste.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Materials properly sorted & recycled
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Reduced landfill impact
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Environmental Agency regulated
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <Leaf className="h-16 w-16 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-center mb-4">Responsible Disposal</h3>
              <p className="text-muted-foreground text-center mb-4">
                All skip hire services across Tettenhall comply with waste disposal regulations and environmental standards.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Legal waste handling & documentation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Waste transfer notes provided
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Professional staff training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tettenhall & Surrounding Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Skip hire services across Tettenhall and nearby postcodes in Wolverhampton and the West Midlands</p>
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
              And all surrounding areas across Wolverhampton and the West Midlands
            </p>
            <p className="font-semibold text-lg">Same day delivery available in Tettenhall</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-12 text-center text-white">
            <SiWhatsapp className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Skip Hire Quote - Tettenhall</h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Ready to book a skip in Tettenhall? Message us on WhatsApp for a fast, free quote. We'll get back to you right away!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-green-50 text-xl px-12 py-6 h-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-3 h-6 w-6" />
                Message on WhatsApp
              </a>
            </Button>
            <p className="text-green-100 mt-4 text-sm">07900 717881</p>
            <p className="text-green-100/90 mt-2 text-sm" data-testid="text-home-link-in-cta">
              Also serving all areas from our
              <Link href="/" className="ml-1 underline underline-offset-4 hover:text-white">
                Wolverhampton skip hire homepage
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
