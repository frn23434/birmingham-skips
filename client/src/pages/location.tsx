import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { useEffect } from "react";
import { Phone, Mail, CheckCircle, Clock, MapPin, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { LocationPage } from "@shared/schema";

export default function LocationPageComponent() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: location, isLoading } = useQuery<LocationPage>({
    queryKey: ["/api/locations", slug],
    queryFn: async () => {
      const response = await fetch(`/api/locations/${slug}`);
      if (!response.ok) throw new Error("Location not found");
      return response.json();
    },
  });

  useEffect(() => {
    if (location) {
      // Set title
      document.title = location.metaTitle;
      
      // Set meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", location.metaDescription);
      }
      
      // Set Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", location.metaTitle);
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute("content", location.metaDescription);
      
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", `https://londonplumbingservices.co.uk/plumbers/${location.slug}`);
      
      // Set canonical tag
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `https://londonplumbingservices.co.uk/plumbers/${location.slug}`);
      
      // Set Twitter Card tags
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute("content", location.metaTitle);
      
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) twitterDescription.setAttribute("content", location.metaDescription);
      
      // Add structured data
      let structuredDataScript = document.getElementById('location-structured-data');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = 'location-structured-data';
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "name": `London Plumbing Services - ${location.name}`,
        "description": location.metaDescription,
        "url": `https://londonplumbingservices.co.uk/plumbers/${location.slug}`,
        "telephone": "02012345678",
        "email": "info@londonplumbingservices.co.uk",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.name,
          "addressRegion": "London",
          "addressCountry": "GB"
        },
        "areaServed": {
          "@type": "City",
          "name": location.name
        },
        "priceRange": "££",
        "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
        "serviceType": ["Emergency Plumbing", "Boiler Installation", "Bathroom Fitting", "Leak Detection", "Drain Unblocking", "Heating Systems"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Plumbing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Plumbing Repairs",
                "description": "24/7 emergency plumbing service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Boiler Installation & Repair",
                "description": "Gas Safe registered boiler services"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156"
        }
      };
      
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
    
    return () => {
      // Cleanup structured data when component unmounts
      const scriptElement = document.getElementById('location-structured-data');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [location]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" data-testid="loading-spinner"></div>
          <p className="mt-4 text-muted-foreground" data-testid="text-loading">Loading...</p>
        </div>
      </div>
    );
  }

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" data-testid="text-not-found">Location Not Found</h1>
            <p className="text-muted-foreground mb-6" data-testid="text-not-found-message">The location you're looking for doesn't exist.</p>
            <Link href="/plumbers">
              <Button data-testid="button-back-to-areas">View All Service Areas</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-location-hero-title">
                {location.heroTitle}
              </h1>
              <p className="text-xl mb-8 text-blue-100" data-testid="text-location-hero-subtitle">
                {location.heroSubtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:02012345678">
                  <Button size="lg" variant="secondary" className="gap-2" data-testid="button-call-now">
                    <Phone className="h-5 w-5" />
                    Call 020 1234 5678
                  </Button>
                </a>
                <a href="mailto:info@londonplumbingservices.co.uk">
                  <Button size="lg" variant="outline" className="gap-2 bg-white text-blue-600 hover:bg-blue-50" data-testid="button-email">
                    <Mail className="h-5 w-5" />
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="text-about-location">
                  Your Local Plumber in {location.name}
                </h2>
                <p className="text-lg text-gray-700 mb-6" data-testid="text-intro">
                  {location.introText}
                </p>
                <p className="text-gray-700 mb-6" data-testid="text-landmark">
                  {location.landmarkText}
                </p>
                <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1" data-testid="text-emergency-title">Emergency Response</h3>
                    <p className="text-blue-800" data-testid="text-emergency-response">{location.emergencyResponse}</p>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" data-testid="text-services-title">
                      <Wrench className="h-6 w-6 text-blue-600" />
                      Our Services in {location.name}
                    </h3>
                    <p className="text-gray-700 mb-6" data-testid="text-services-emphasis">
                      {location.servicesEmphasis}
                    </p>
                    <ul className="space-y-3">
                      {["Emergency Plumbing Repairs", "Boiler Installation & Repair", "Bathroom Fitting & Design", "Leak Detection", "Drain Unblocking", "Central Heating Systems"].map((service, index) => (
                        <li key={index} className="flex items-center gap-2" data-testid={`list-item-service-${index}`}>
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg" data-testid="text-testimonial-author">{location.testimonialAuthor}</h3>
                        <span className="text-sm text-gray-600" data-testid="text-testimonial-service">• {location.testimonialService}</span>
                      </div>
                      <p className="text-gray-700 italic" data-testid="text-testimonial">&ldquo;{location.testimonialText}&rdquo;</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-faq-title">
                Frequently Asked Questions - {location.name}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {location.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-faq-${index}`}>
                    <AccordionTrigger className="text-left" data-testid={`button-faq-${index}`}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent data-testid={`text-faq-answer-${index}`}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4" data-testid="text-cta-title">
              Need a Plumber in {location.name}?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100" data-testid="text-cta-description">
              Our Gas Safe registered engineers are ready to help. Call now for same-day service across {location.borough}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:02012345678">
                <Button size="lg" variant="secondary" className="gap-2" data-testid="button-cta-call">
                  <Phone className="h-5 w-5" />
                  020 1234 5678
                </Button>
              </a>
              <Link href="/plumbers">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent border-white text-white hover:bg-blue-700" data-testid="button-view-all-areas">
                  <MapPin className="h-5 w-5" />
                  View All Service Areas
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
