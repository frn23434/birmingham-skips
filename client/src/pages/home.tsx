import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import SearchFilters from "@/components/search-filters";
import PlumberCard from "@/components/plumber-card";
import Footer from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";
import type { Plumber } from "@shared/schema";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Areas in Bradford");
  const [selectedService, setSelectedService] = useState("All Services");

  const { data: plumbers, isLoading } = useQuery<Plumber[]>({
    queryKey: [
      "/api/plumbers/search",
      { query: searchQuery, area: selectedArea, service: selectedService },
    ],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (searchQuery) params.append("query", searchQuery);
      if (selectedArea && selectedArea !== "All Areas in Bradford")
        params.append("area", selectedArea);
      if (selectedService && selectedService !== "All Services")
        params.append("service", selectedService);

      const response = await fetch(`/api/plumbers/search?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to fetch plumbers");
      return response.json();
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <SearchFilters
        searchQuery={searchQuery}
        selectedArea={selectedArea}
        selectedService={selectedService}
        onSearchChange={setSearchQuery}
        onAreaChange={setSelectedArea}
        onServiceChange={setSelectedService}
      />
      <div className="h-24 md:h-28"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-foreground">Plumbers in Bradford</h3>
            {plumbers && (
              <p className="text-sm text-muted-foreground mt-1" data-testid="text-results-count">
                Showing {plumbers.length} results
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-muted-foreground">Sort by:</label>
            <select className="px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm bg-card">
              <option>Recommended</option>
              <option>Highest Rated</option>
              <option>Most Reviews</option>
              <option>Nearest First</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4">
                  <Skeleton className="w-20 h-20 rounded-lg" />
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-8 w-24" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : plumbers && plumbers.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {plumbers.map((plumber) => (
              <PlumberCard key={plumber.id} plumber={plumber} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg" data-testid="text-no-results">
              No plumbers found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
