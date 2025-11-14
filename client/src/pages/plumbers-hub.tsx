import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { LocationPage } from "@shared/schema";

export default function PlumbersHub() {
  const { data: locations, isLoading } = useQuery<LocationPage[]>({
    queryKey: ["/api/locations"],
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <MapPin className="h-16 w-16 mx-auto mb-6" data-testid="icon-map" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-page-title">
                Plumbing Services Across London
              </h1>
              <p className="text-xl mb-8 text-blue-100" data-testid="text-page-subtitle">
                Professional Gas Safe registered plumbers serving every London borough. Find your local area for fast, reliable service.
              </p>
              <a href="tel:02012345678">
                <Button size="lg" variant="secondary" className="gap-2" data-testid="button-call-emergency">
                  <Phone className="h-5 w-5" />
                  24/7 Emergency: 020 1234 5678
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" data-testid="text-service-areas-title">
                Our Service Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-service-areas-description">
                Click on your area to see local plumbing services, emergency response times, and area-specific information.
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(15)].map((_, i) => (
                  <Card key={i} className="animate-pulse" data-testid={`skeleton-card-${i}`}>
                    <CardHeader>
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mt-2"></div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locations?.map((location) => (
                  <Link key={location.id} href={`/plumbers/${location.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group" data-testid={`card-location-${location.slug}`}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between" data-testid={`text-location-name-${location.slug}`}>
                          {location.name}
                          <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </CardTitle>
                        <CardDescription data-testid={`text-location-borough-${location.slug}`}>
                          {location.borough}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                            <p className="text-sm text-gray-600 line-clamp-2" data-testid={`text-location-intro-${location.slug}`}>
                              {location.heroSubtitle}
                            </p>
                          </div>
                          <div className="pt-3 border-t">
                            <p className="text-sm font-medium text-blue-600" data-testid={`text-learn-more-${location.slug}`}>
                              Learn more about our services in {location.name} →
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4" data-testid="text-cta-title">
                Don't See Your Area?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto" data-testid="text-cta-description">
                We serve all of Greater London. Call us now to discuss your plumbing needs, wherever you are.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:02012345678">
                  <Button size="lg" variant="secondary" className="gap-2" data-testid="button-call-now">
                    <Phone className="h-5 w-5" />
                    Call 020 1234 5678
                  </Button>
                </a>
                <a href="mailto:info@londonplumbingservices.co.uk">
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent border-white text-white hover:bg-blue-700" data-testid="button-email-us">
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
