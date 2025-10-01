import { type Plumber, type InsertPlumber } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getPlumber(id: string): Promise<Plumber | undefined>;
  getAllPlumbers(): Promise<Plumber[]>;
  searchPlumbers(query: string, area?: string, service?: string): Promise<Plumber[]>;
  createPlumber(plumber: InsertPlumber): Promise<Plumber>;
}

export class MemStorage implements IStorage {
  private plumbers: Map<string, Plumber>;

  constructor() {
    this.plumbers = new Map();
    this.seedData();
  }

  private seedData() {
    const plumberData: InsertPlumber[] = [
      {
        businessName: "Swift Plumbing Services",
        phone: "01274123456",
        mobile: "07700123456",
        email: "info@swiftplumbing.co.uk",
        address: "123 High Street, Bradford, BD1 2AB",
        rating: 5.0,
        reviewCount: 124,
        serviceAreas: ["Bradford City Centre", "Shipley", "Keighley"],
        services: ["Emergency Repairs", "Boiler Installation", "Leak Repairs", "Drain Unblocking", "Central Heating", "Gas Safety Checks"],
        description: "Professional plumbing services across Bradford and surrounding areas. Over 15 years of experience providing high-quality repairs, installations, and maintenance.",
        is24_7: "true",
        isGasSafe: "true",
        isVerified: "true",
        openingHours: {
          monday: "8:00 AM - 6:00 PM",
          tuesday: "8:00 AM - 6:00 PM",
          wednesday: "8:00 AM - 6:00 PM",
          thursday: "8:00 AM - 6:00 PM",
          friday: "8:00 AM - 6:00 PM",
          saturday: "9:00 AM - 5:00 PM",
          sunday: "Emergency Only",
        },
      },
      {
        businessName: "Bradford Heating & Plumbing Ltd",
        phone: "01274234567",
        mobile: "07700234567",
        email: "contact@bradfordheating.co.uk",
        address: "45 Market Street, Bradford, BD1 3HQ",
        rating: 4.8,
        reviewCount: 89,
        serviceAreas: ["Bingley", "Saltaire", "Ilkley"],
        services: ["Central Heating", "Boiler Service", "Bathroom Fitting", "Radiator Installation", "Gas Safety Checks"],
        description: "Specialist heating and plumbing services with Gas Safe registered engineers.",
        is24_7: "false",
        isGasSafe: "true",
        isVerified: "true",
        openingHours: {
          monday: "8:00 AM - 5:30 PM",
          tuesday: "8:00 AM - 5:30 PM",
          wednesday: "8:00 AM - 5:30 PM",
          thursday: "8:00 AM - 5:30 PM",
          friday: "8:00 AM - 5:30 PM",
          saturday: "9:00 AM - 1:00 PM",
        },
      },
      {
        businessName: "AquaFix Plumbing Solutions",
        phone: "01274345678",
        mobile: "07700345678",
        email: "hello@aquafix.co.uk",
        address: "78 Leeds Road, Bradford, BD3 9LN",
        rating: 4.9,
        reviewCount: 156,
        serviceAreas: ["Thornton", "Queensbury", "Bradford"],
        services: ["Drain Unblocking", "Leak Detection", "Tap Repairs", "Emergency Repairs", "Bathroom Fitting", "Boiler Repair", "Water Heater Installation"],
        description: "Fast and reliable plumbing solutions for residential and commercial properties.",
        is24_7: "false",
        isGasSafe: "false",
        isVerified: "true",
        openingHours: {
          monday: "7:00 AM - 7:00 PM",
          tuesday: "7:00 AM - 7:00 PM",
          wednesday: "7:00 AM - 7:00 PM",
          thursday: "7:00 AM - 7:00 PM",
          friday: "7:00 AM - 7:00 PM",
          saturday: "8:00 AM - 4:00 PM",
        },
      },
      {
        businessName: "ProHeat Plumbing & Gas",
        phone: "01274456789",
        mobile: "07700456789",
        email: "info@proheat.co.uk",
        address: "12 Station Road, Keighley, BD21 4QH",
        rating: 4.3,
        reviewCount: 67,
        serviceAreas: ["Keighley", "Shipley", "Bradford"],
        services: ["Gas Safety", "Boiler Repair", "Radiator Install", "Central Heating", "Emergency Repairs", "Boiler Installation", "Power Flushing", "Thermostat Installation"],
        description: "Qualified Gas Safe engineers providing heating and plumbing services.",
        is24_7: "true",
        isGasSafe: "true",
        isVerified: "false",
        openingHours: {
          monday: "8:00 AM - 6:00 PM",
          tuesday: "8:00 AM - 6:00 PM",
          wednesday: "8:00 AM - 6:00 PM",
          thursday: "8:00 AM - 6:00 PM",
          friday: "8:00 AM - 6:00 PM",
          saturday: "9:00 AM - 3:00 PM",
          sunday: "Emergency Only",
        },
      },
      {
        businessName: "Elite Bathroom & Plumbing",
        phone: "01274567890",
        mobile: "07700567890",
        email: "contact@elitebathroom.co.uk",
        address: "89 Church Street, Saltaire, BD18 3PF",
        rating: 4.7,
        reviewCount: 203,
        serviceAreas: ["City Centre", "Saltaire", "Ilkley"],
        services: ["Bathroom Refit", "Shower Install", "Wet Rooms", "Tiling", "Bathroom Design", "Toilet Installation", "Basin Fitting", "Plumbing Repairs", "Leak Repairs"],
        description: "Bathroom specialists offering complete design, installation and plumbing services.",
        is24_7: "false",
        isGasSafe: "false",
        isVerified: "true",
        openingHours: {
          monday: "9:00 AM - 6:00 PM",
          tuesday: "9:00 AM - 6:00 PM",
          wednesday: "9:00 AM - 6:00 PM",
          thursday: "9:00 AM - 6:00 PM",
          friday: "9:00 AM - 6:00 PM",
          saturday: "10:00 AM - 4:00 PM",
        },
      },
      {
        businessName: "Quick Response Plumbing",
        phone: "01274678901",
        mobile: "07700678901",
        email: "emergency@quickresponse.co.uk",
        address: "34 Manor Row, Bradford, BD1 4PS",
        rating: 5.0,
        reviewCount: 98,
        serviceAreas: ["All Bradford Areas"],
        services: ["Burst Pipes", "Emergency Call-out", "Water Leaks", "Boiler Breakdown", "Radiator Leaks", "Frozen Pipes"],
        description: "24/7 emergency plumbing service across all Bradford areas with rapid response times.",
        is24_7: "true",
        isGasSafe: "true",
        isVerified: "true",
        openingHours: {
          monday: "24 Hours",
          tuesday: "24 Hours",
          wednesday: "24 Hours",
          thursday: "24 Hours",
          friday: "24 Hours",
          saturday: "24 Hours",
          sunday: "24 Hours",
        },
      },
    ];

    plumberData.forEach((data) => {
      const id = randomUUID();
      const plumber: Plumber = { ...data, id };
      this.plumbers.set(id, plumber);
    });
  }

  async getPlumber(id: string): Promise<Plumber | undefined> {
    return this.plumbers.get(id);
  }

  async getAllPlumbers(): Promise<Plumber[]> {
    return Array.from(this.plumbers.values());
  }

  async searchPlumbers(query: string = "", area?: string, service?: string): Promise<Plumber[]> {
    let results = Array.from(this.plumbers.values());

    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (p) =>
          p.businessName.toLowerCase().includes(lowerQuery) ||
          p.services.some((s) => s.toLowerCase().includes(lowerQuery))
      );
    }

    // Filter by area
    if (area && area !== "All Areas in Bradford") {
      results = results.filter((p) =>
        p.serviceAreas.some((a) => a.toLowerCase().includes(area.toLowerCase()))
      );
    }

    // Filter by service
    if (service && service !== "All Services") {
      results = results.filter((p) =>
        p.services.some((s) => s.toLowerCase().includes(service.toLowerCase()))
      );
    }

    return results;
  }

  async createPlumber(insertPlumber: InsertPlumber): Promise<Plumber> {
    const id = randomUUID();
    const plumber: Plumber = { ...insertPlumber, id };
    this.plumbers.set(id, plumber);
    return plumber;
  }
}

export const storage = new MemStorage();
