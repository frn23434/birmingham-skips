import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Tag,
  Shield,
  Star,
  CheckCircle,
  ArrowLeft,
  MessageSquare,
  Mail,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";
import type { Plumber } from "@shared/schema";

export default function PlumberProfile() {
  const { id } = useParams<{ id: string }>();

  const { data: plumber, isLoading } = useQuery<Plumber>({
    queryKey: ["/api/plumbers", id],
    enabled: !!id,
  });

  useEffect(() => {
    const originalDescription = "Find trusted, verified plumbers on the Isle of Wight, UK. Search by area and service including emergency repairs, boiler installation, bathroom fitting, and more. Gas Safe registered professionals available 24/7.";
    
    if (plumber) {
      document.title = `${plumber.businessName} - Plumber on the Isle of Wight | IsleofWightPlumbing.co.uk`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${plumber.businessName} - ${plumber.description.substring(0, 150)}... Contact: ${plumber.phone}. Serving ${plumber.serviceAreas.join(', ')} on the Isle of Wight, UK.`);
      }

      // Update canonical URL for this profile
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://isleofwightplumbing.co.uk/plumber/${plumber.id}`);

      // Add Schema.org structured data
      const existingSchema = document.getElementById('plumber-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      const schema = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "name": plumber.businessName,
        "description": plumber.description,
        "telephone": plumber.phone,
        "email": plumber.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": plumber.address,
          "addressLocality": "Isle of Wight",
          "addressRegion": "England",
          "addressCountry": "GB"
        },
        "areaServed": plumber.serviceAreas.map(area => ({
          "@type": "City",
          "name": area
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": plumber.rating,
          "reviewCount": plumber.reviewCount
        },
        "priceRange": "££"
      };

      const script = document.createElement('script');
      script.id = 'plumber-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    
    return () => {
      document.title = "Isle of Wight Plumbing - Find Trusted Local Plumbers on the Isle of Wight, UK";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://isleofwightplumbing.co.uk/');
      }
      const schema = document.getElementById('plumber-schema');
      if (schema) schema.remove();
    };
  }, [plumber]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-current opacity-50" />);
    }
    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} className="w-4 h-4" />);
    }
    return stars;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
          <Skeleton className="h-8 w-32 mb-6" />
          <div className="bg-card rounded-xl p-6 space-y-6">
            <div className="flex gap-6">
              <Skeleton className="w-32 h-32 rounded-lg" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-8 w-2/3" />
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!plumber) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Plumber not found</p>
            <Link href="/">
              <a className="text-primary hover:underline mt-4 inline-block">
                Return to directory
              </a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Link href="/">
          <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6" data-testid="link-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to directory
          </a>
        </Link>

        <div className="bg-card rounded-xl overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-wrench text-5xl text-primary"></i>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl font-bold text-foreground mb-2" data-testid="text-business-name">
                  {plumber.businessName} - Plumber on the Isle of Wight
                </h1>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center text-amber-500">
                    {renderStars(plumber.rating)}
                  </div>
                  <span className="text-muted-foreground" data-testid="text-rating">
                    {plumber.rating.toFixed(1)} ({plumber.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  {plumber.is24_7 === "true" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                      <Clock className="mr-2 h-4 w-4" />
                      24/7 Emergency Service
                    </span>
                  )}
                  {plumber.isGasSafe === "true" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent-foreground">
                      <Tag className="mr-2 h-4 w-4" />
                      Gas Safe Registered
                    </span>
                  )}
                  {plumber.isVerified === "true" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      <Shield className="mr-2 h-4 w-4" />
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed" data-testid="text-description">
                  {plumber.description}
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1 h-5 w-5" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Phone</div>
                    <a
                      href={`tel:${plumber.phone}`}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      {plumber.phone}
                    </a>
                  </div>
                </div>
                {plumber.mobile && (
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary mt-1 h-5 w-5" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Mobile</div>
                      <a
                        href={`tel:${plumber.mobile}`}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                        data-testid="link-mobile"
                      >
                        {plumber.mobile}
                      </a>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-1 h-5 w-5" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a
                      href={`mailto:${plumber.email}`}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      {plumber.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 h-5 w-5" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Address</div>
                    <div className="text-foreground font-medium" data-testid="text-address">
                      {plumber.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {plumber.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    data-testid={`badge-area-${area}`}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Services Offered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {plumber.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                    data-testid={`service-${service}`}
                  >
                    <CheckCircle className="text-secondary h-5 w-5" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border flex flex-wrap gap-3">
              <a
                href={`tel:${plumber.phone}`}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                data-testid="button-call"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a
                href={`sms:${plumber.phone}`}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
                data-testid="button-message"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Message
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
