import { Search, MapPin, Wrench, ChevronDown } from "lucide-react";

interface SearchFiltersProps {
  searchQuery: string;
  selectedArea: string;
  selectedService: string;
  onSearchChange: (value: string) => void;
  onAreaChange: (value: string) => void;
  onServiceChange: (value: string) => void;
}

const areas = [
  "All Areas in Bradford",
  "Bradford City Centre",
  "Shipley",
  "Keighley",
  "Bingley",
  "Ilkley",
  "Saltaire",
  "Queensbury",
  "Thornton",
];

const services = [
  "All Services",
  "Emergency Repairs",
  "Boiler Installation",
  "Bathroom Fitting",
  "Leak Repairs",
  "Drain Unblocking",
  "Central Heating",
  "Gas Safety Checks",
];

export default function SearchFilters({
  searchQuery,
  selectedArea,
  selectedService,
  onSearchChange,
  onAreaChange,
  onServiceChange,
}: SearchFiltersProps) {
  return (
    <section className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search plumbers by name or service..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              data-testid="input-search"
            />
          </div>

          <div className="md:w-64 relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <select
              value={selectedArea}
              onChange={(e) => onAreaChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none bg-card"
              data-testid="select-area"
            >
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none h-5 w-5" />
          </div>

          <div className="md:w-64 relative">
            <Wrench className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <select
              value={selectedService}
              onChange={(e) => onServiceChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none bg-card"
              data-testid="select-service"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
