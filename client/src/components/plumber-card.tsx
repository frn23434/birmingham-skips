import { Link } from "wouter";
import { Phone, Info, Star, Clock, Tag } from "lucide-react";
import type { Plumber } from "@shared/schema";

interface PlumberCardProps {
  plumber: Plumber;
}

export default function PlumberCard({ plumber }: PlumberCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-3 h-3 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-3 h-3 fill-current opacity-50" />);
    }
    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} className="w-3 h-3" />);
    }
    return stars;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow" data-testid={`card-plumber-${plumber.id}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <div className={`w-20 h-20 ${plumber.isGasSafe === "true" ? "bg-secondary/10" : "bg-primary/10"} rounded-lg flex items-center justify-center`}>
            <i className={`fas fa-wrench text-3xl ${plumber.isGasSafe === "true" ? "text-secondary" : "text-primary"}`}></i>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <div>
              <h4 className="text-lg font-semibold text-foreground" data-testid={`text-business-name-${plumber.id}`}>
                {plumber.businessName}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center text-amber-500">
                  {renderStars(plumber.rating)}
                </div>
                <span className="text-sm text-muted-foreground" data-testid={`text-rating-${plumber.id}`}>
                  {plumber.rating.toFixed(1)} ({plumber.reviewCount} reviews)
                </span>
              </div>
            </div>
            {plumber.is24_7 === "true" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                <Clock className="mr-1 h-3 w-3" />
                24/7 Available
              </span>
            )}
            {plumber.isGasSafe === "true" && plumber.is24_7 !== "true" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground">
                <Tag className="mr-1 h-3 w-3" />
                Gas Safe
              </span>
            )}
          </div>

          <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
            <i className="fas fa-map-marker-alt mt-0.5"></i>
            <span data-testid={`text-service-areas-${plumber.id}`}>
              {plumber.serviceAreas.join(", ")}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {plumber.services.slice(0, 3).map((service) => (
              <span key={service} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                {service}
              </span>
            ))}
            {plumber.services.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                +{plumber.services.length - 3} more
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${plumber.phone}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
              data-testid={`link-call-${plumber.id}`}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
            <Link href={`/plumber/${plumber.id}`}>
              <a className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium text-sm" data-testid={`button-view-profile-${plumber.id}`}>
                <Info className="mr-2 h-4 w-4" />
                View Profile
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
