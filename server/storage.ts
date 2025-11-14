import { type Plumber, type InsertPlumber, type LocationPage, type InsertLocationPage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getPlumber(id: string): Promise<Plumber | undefined>;
  getAllPlumbers(): Promise<Plumber[]>;
  searchPlumbers(query: string, area?: string, service?: string): Promise<Plumber[]>;
  createPlumber(plumber: InsertPlumber): Promise<Plumber>;
  getLocationPage(slug: string): Promise<LocationPage | undefined>;
  getAllLocationPages(): Promise<LocationPage[]>;
}

export class MemStorage implements IStorage {
  private plumbers: Map<string, Plumber>;
  private locationPages: Map<string, LocationPage>;

  constructor() {
    this.plumbers = new Map();
    this.locationPages = new Map();
    this.seedData();
    this.seedLocationPages();
  }

  private seedData() {
    const plumberData: InsertPlumber[] = [
      {
        businessName: "Island Plumbing Services",
        phone: "01983123456",
        mobile: "07700123456",
        email: "info@islandplumbing.co.uk",
        address: "15 High Street, Newport, PO30 1SS",
        rating: 5.0,
        reviewCount: 124,
        serviceAreas: ["Newport", "Cowes", "East Cowes"],
        services: ["Emergency Repairs", "Boiler Installation", "Leak Repairs", "Drain Unblocking", "Central Heating", "Gas Safety Checks"],
        description: "Professional plumbing services across the Isle of Wight. Over 15 years of experience providing high-quality repairs, installations, and maintenance.",
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
        businessName: "Wight Heating & Plumbing Ltd",
        phone: "01983234567",
        mobile: "07700234567",
        email: "contact@wightheating.co.uk",
        address: "23 Union Street, Ryde, PO33 2LF",
        rating: 4.8,
        reviewCount: 89,
        serviceAreas: ["Ryde", "Seaview", "Bembridge"],
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
        businessName: "AquaFix Isle of Wight",
        phone: "01983345678",
        mobile: "07700345678",
        email: "hello@aquafixiow.co.uk",
        address: "42 High Street, Sandown, PO36 8DH",
        rating: 4.9,
        reviewCount: 156,
        serviceAreas: ["Sandown", "Shanklin", "Lake"],
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
        businessName: "ProHeat Plumbing & Gas IOW",
        phone: "01983456789",
        mobile: "07700456789",
        email: "info@proheat-iow.co.uk",
        address: "8 Birmingham Road, Cowes, PO31 7BH",
        rating: 4.3,
        reviewCount: 67,
        serviceAreas: ["Cowes", "East Cowes", "Newport"],
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
        businessName: "Elite Bathroom & Plumbing IOW",
        phone: "01983567890",
        mobile: "07700567890",
        email: "contact@elitebathroom-iow.co.uk",
        address: "56 Regent Street, Shanklin, PO37 7AP",
        rating: 4.7,
        reviewCount: 203,
        serviceAreas: ["Shanklin", "Sandown", "Ventnor"],
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
        businessName: "Quick Response Plumbing IOW",
        phone: "01983678901",
        mobile: "07700678901",
        email: "emergency@quickresponse-iow.co.uk",
        address: "12 Pyle Street, Newport, PO30 1JW",
        rating: 5.0,
        reviewCount: 98,
        serviceAreas: ["All Isle of Wight Areas"],
        services: ["Burst Pipes", "Emergency Call-out", "Water Leaks", "Boiler Breakdown", "Radiator Leaks", "Frozen Pipes"],
        description: "24/7 emergency plumbing service across all Isle of Wight areas with rapid response times.",
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
      const plumber: Plumber = { ...data, id, mobile: data.mobile || null };
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
    if (area && area !== "All Areas on the Isle of Wight") {
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
    const plumber: Plumber = { ...insertPlumber, id, mobile: insertPlumber.mobile || null };
    this.plumbers.set(id, plumber);
    return plumber;
  }

  private seedLocationPages() {
    const locationData: InsertLocationPage[] = [
      {
        slug: "camden",
        name: "Camden",
        borough: "London Borough of Camden",
        metaTitle: "Emergency Plumber in Camden | 24/7 Gas Safe Plumbers | London Plumbing Services",
        metaDescription: "Need a plumber in Camden? Gas Safe registered emergency plumbers serving Camden Town, Hampstead, Kentish Town & Kings Cross. Expert boiler repairs, leak detection & bathroom fitting. Call 020 1234 5678 for same-day service!",
        heroTitle: "Trusted Plumber in Camden",
        heroSubtitle: "24/7 Emergency Plumbing for Camden, Hampstead & Kentish Town",
        introText: "Serving Camden's diverse housing stock from Victorian terraces to modern apartments. Our Gas Safe registered plumbers understand the unique challenges of Camden's historic properties, including the conversion flats in Primrose Hill and period homes around Regent's Park.",
        landmarkText: "We're proud to serve residents near Camden Market, Regent's Canal, and the British Library. Whether you're in a conversion flat in Belsize Park or a warehouse apartment near King's Cross, our local team provides rapid response times across all NW postcodes.",
        servicesEmphasis: "Specializing in Victorian-era plumbing upgrades, combi boiler installations for flats, bathroom renovations for period properties, and emergency leak detection in listed buildings. We're experienced with Camden's older pipe systems and building regulations for conservation areas.",
        emergencyResponse: "Average 45-minute response time to Camden postcodes (NW1, NW3, NW5). Emergency callouts available 24/7.",
        testimonialAuthor: "Sarah Mitchell",
        testimonialText: "Quick response to our burst pipe emergency in our Kentish Town flat. The plumber arrived within an hour and fixed everything professionally. Highly recommend for Camden residents!",
        testimonialService: "Emergency Leak Repair",
        faqs: [
          { question: "Do you service listed buildings in Camden?", answer: "Yes, we're experienced working with listed properties and conservation areas throughout Camden, including Primrose Hill and Hampstead. We follow all local authority guidelines and work sensitively with period features." },
          { question: "What's your callout time for Camden emergencies?", answer: "We typically arrive within 45 minutes for emergency callouts in Camden, including Camden Town, Kentish Town, Hampstead, and King's Cross areas." },
          { question: "Can you install boilers in Camden flats?", answer: "Absolutely. We specialize in combi boiler installations for flats and apartments throughout Camden, ensuring compliance with building regulations for multi-occupancy properties." }
        ]
      },
      {
        slug: "islington",
        name: "Islington",
        borough: "London Borough of Islington",
        metaTitle: "Islington Plumber | Gas Safe Emergency Plumber Angel & Highbury | 24/7 Service",
        metaDescription: "Professional plumbers in Islington - Angel, Highbury, Finsbury Park & Holloway. Gas Safe certified. Boiler installation, central heating, emergency repairs. Book online or call 020 1234 5678 today!",
        heroTitle: "Expert Plumbing Services in Islington",
        heroSubtitle: "Serving Angel, Highbury, Finsbury Park & Archway 24/7",
        introText: "Islington's Georgian and Victorian properties require specialist plumbing knowledge. From the elegant terraces of Barnsbury to modern developments along Regent's Canal, our team handles everything from period restorations to contemporary refurbishments.",
        landmarkText: "Local to Upper Street, Emirates Stadium, and Sadler's Wells Theatre. We serve the entire borough from Archway to Angel, including the popular areas around Highbury Fields and Canonbury Square.",
        servicesEmphasis: "Expert in Georgian property plumbing, underfloor heating installation, bathroom design and fitting, and radiator balancing for period homes. We understand Islington's mix of heritage buildings and new-build apartments.",
        emergencyResponse: "35-minute average response to Islington postcodes (N1, N4, N5, N7, N19). Round-the-clock emergency service available.",
        testimonialAuthor: "James Patterson",
        testimonialText: "Fantastic service for our bathroom renovation in Highbury. They managed the whole project professionally and respected our Victorian home's original features. Would definitely use again.",
        testimonialService: "Bathroom Fitting",
        faqs: [
          { question: "Do you work on Georgian properties in Islington?", answer: "Yes, we specialize in Georgian and Victorian properties throughout Islington, particularly in Barnsbury, Canonbury, and around Highbury Fields. Our team is trained in heritage property plumbing." },
          { question: "Can you service commercial properties near Upper Street?", answer: "Absolutely. We provide commercial plumbing services for restaurants, offices, and retail spaces throughout Islington, including the busy Upper Street and Chapel Market areas." },
          { question: "What heating systems do you recommend for Islington flats?", answer: "For Islington flats, we typically recommend efficient combi boilers or system boilers depending on your hot water needs. We'll assess your property and recommend the most cost-effective solution." }
        ]
      },
      {
        slug: "hackney",
        name: "Hackney",
        borough: "London Borough of Hackney",
        metaTitle: "Hackney Plumber | Emergency Plumber Shoreditch, Dalston & Stoke Newington",
        metaDescription: "Trusted plumbers in Hackney - Shoreditch, Dalston, Stoke Newington & Clapton. Same-day service. Gas Safe engineers for boilers, leaks & bathrooms. Call 020 1234 5678 now!",
        heroTitle: "Reliable Plumbers in Hackney",
        heroSubtitle: "Fast Service to Shoreditch, Dalston, Stoke Newington & Hackney Wick",
        introText: "Hackney's vibrant mix of warehouse conversions, Victorian terraces, and modern developments requires versatile plumbing expertise. We service everything from loft apartments in Shoreditch to family homes in Stoke Newington.",
        landmarkText: "Serving areas around Victoria Park, Hackney Marshes, and Broadway Market. Our engineers are familiar with the unique plumbing challenges of Hackney's converted industrial spaces and period properties alike.",
        servicesEmphasis: "Specialized in loft conversion plumbing, industrial space adaptations, pressurized water systems for tall buildings, and eco-friendly heating solutions. Perfect for Hackney's creative live-work spaces and modern family homes.",
        emergencyResponse: "40-minute average response across Hackney (E5, E8, E9, N1, N16). 24/7 emergency plumbing available.",
        testimonialAuthor: "Emma Thompson",
        testimonialText: "Called them for a boiler breakdown in our Stoke Newington home. Engineer arrived quickly, diagnosed the issue, and had heating restored the same day. Professional and fairly priced.",
        testimonialService: "Boiler Repair",
        faqs: [
          { question: "Do you install plumbing in loft conversions in Hackney?", answer: "Yes, we're experienced with loft conversion plumbing throughout Hackney, including complex installations in Shoreditch and Dalston warehouse conversions." },
          { question: "Can you work with eco-friendly heating systems?", answer: "Absolutely. We install and service heat pumps, solar thermal systems, and high-efficiency boilers - popular choices for environmentally-conscious Hackney homeowners." },
          { question: "What's your experience with Victorian properties in Stoke Newington?", answer: "Extensive. We regularly work on Victorian terraces in Stoke Newington, handling everything from pipe replacements to full bathroom renovations while preserving period features." }
        ]
      },
      {
        slug: "westminster",
        name: "Westminster",
        borough: "City of Westminster",
        metaTitle: "Westminster Plumber | Pimlico, Marylebone & Mayfair Emergency Plumber 24/7",
        metaDescription: "Premium plumbing services in Westminster - Pimlico, Marylebone, Mayfair, Victoria & Paddington. Discreet, professional service for residential & commercial properties. Call 020 1234 5678.",
        heroTitle: "Premium Plumbing in Westminster",
        heroSubtitle: "Discreet Professional Service for Pimlico, Mayfair & Marylebone",
        introText: "Westminster's prestigious properties demand the highest standards of plumbing service. From elegant Regency townhouses in Pimlico to luxury Mayfair apartments, we provide discreet, professional solutions that respect the exclusivity of your property.",
        landmarkText: "Trusted by residents near Hyde Park, Regent's Park, and Buckingham Palace. We serve all Westminster areas including Victoria, Paddington, and the exclusive streets around St James's.",
        servicesEmphasis: "High-end bathroom installations, luxury appliance plumbing, heritage property services, and commercial plumbing for Westminster businesses. We're experienced with listed buildings and work discreetly in high-security residences.",
        emergencyResponse: "30-minute priority response to Westminster postcodes (SW1, W1, W2, W9, NW1). Discreet emergency service available 24/7.",
        testimonialAuthor: "Charles Beaumont",
        testimonialText: "Impeccable service for our Pimlico townhouse. They handled our bathroom renovation with professionalism and attention to detail. Perfect for period properties.",
        testimonialService: "Luxury Bathroom Installation",
        faqs: [
          { question: "Do you work on listed buildings in Westminster?", answer: "Yes, we're experienced with Grade I and Grade II listed properties throughout Westminster, working closely with conservation officers and respecting architectural heritage." },
          { question: "Can you provide discreet service for high-profile properties?", answer: "Absolutely. We understand the need for discretion in Westminster's exclusive addresses and can arrange out-of-hours visits and confidential service." },
          { question: "Do you service commercial properties in Westminster?", answer: "Yes, we provide commercial plumbing for offices, restaurants, and retail spaces throughout Westminster, including the busy Victoria and Paddington areas." }
        ]
      },
      {
        slug: "kensington-chelsea",
        name: "Kensington & Chelsea",
        borough: "Royal Borough of Kensington and Chelsea",
        metaTitle: "Kensington & Chelsea Plumber | South Kensington, Chelsea & Notting Hill 24/7",
        metaDescription: "Luxury plumbing services in Kensington & Chelsea. Expert plumbers for South Ken, Chelsea, Knightsbridge & Notting Hill. Premium bathroom fitting, boiler installation. Call 020 1234 5678.",
        heroTitle: "Luxury Plumbing in Kensington & Chelsea",
        heroSubtitle: "Elite Service for South Kensington, Chelsea & Knightsbridge",
        introText: "The Royal Borough's prestigious properties require exceptional plumbing expertise. From grand Victorian villas in Holland Park to contemporary penthouses in Chelsea Harbour, we deliver premium service that matches the caliber of your property.",
        landmarkText: "Serving exclusive areas near Harrods, the V&A Museum, and Kensington Palace. Our team knows every corner of the borough from Portobello Road to Sloane Square.",
        servicesEmphasis: "Designer bathroom installations, high-end kitchen plumbing, smart home water systems, underfloor heating, and restoration work for heritage properties. We work with leading interior designers and architects.",
        emergencyResponse: "25-minute priority response to Royal Borough postcodes (SW3, SW5, SW7, SW10, W8, W11, W14). Premium 24/7 emergency service.",
        testimonialAuthor: "Victoria Sinclair",
        testimonialText: "Outstanding bathroom installation in our Chelsea home. They coordinated perfectly with our interior designer and delivered flawless results. True craftsmen.",
        testimonialService: "Designer Bathroom Installation",
        faqs: [
          { question: "Do you work with interior designers and architects?", answer: "Yes, we regularly collaborate with leading designers and architects on projects throughout Kensington & Chelsea, ensuring seamless integration of plumbing with high-end finishes." },
          { question: "Can you install luxury fixtures and designer taps?", answer: "Absolutely. We're experienced with premium brands and can source and install luxury bathroom and kitchen fixtures from the world's leading manufacturers." },
          { question: "Do you service mansion blocks in South Kensington?", answer: "Yes, we're very familiar with South Kensington's iconic mansion blocks and the specific plumbing requirements of these prestigious buildings." }
        ]
      },
      {
        slug: "hammersmith-fulham",
        name: "Hammersmith & Fulham",
        borough: "London Borough of Hammersmith and Fulham",
        metaTitle: "Hammersmith & Fulham Plumber | Emergency Plumber Fulham, Shepherd's Bush",
        metaDescription: "Local plumbers in Hammersmith & Fulham - Fulham, Shepherd's Bush, White City & Brook Green. Fast response, Gas Safe certified. Boilers, leaks, bathrooms. Call 020 1234 5678.",
        heroTitle: "Local Plumbing Experts in Hammersmith & Fulham",
        heroSubtitle: "Serving Fulham, Shepherd's Bush, White City & Brook Green",
        introText: "From riverside apartments along the Thames to family homes in Fulham, we provide comprehensive plumbing services across the borough. Our local knowledge means we understand the area's housing mix and can respond quickly to any emergency.",
        landmarkText: "We cover all areas from Hammersmith Broadway to Parsons Green, including the riverside developments and terraced streets around Ravenscourt Park and Shepherd's Bush.",
        servicesEmphasis: "Riverside property specialists, boiler installations for period conversions, bathroom modernization, and drainage solutions. We're experienced with the borough's mix of Victorian terraces and modern riverside developments.",
        emergencyResponse: "35-minute average response to Hammersmith & Fulham (SW6, W6, W12, W14). 24/7 emergency callouts available.",
        testimonialAuthor: "Michael Roberts",
        testimonialText: "Great service fixing our central heating in Fulham. The engineer was knowledgeable, efficient, and cleaned up perfectly. Will use them for all our plumbing needs.",
        testimonialService: "Central Heating Repair",
        faqs: [
          { question: "Do you handle plumbing for riverside properties?", answer: "Yes, we're experienced with riverside apartments and houses along the Thames, understanding the specific challenges like water pressure and flood prevention measures." },
          { question: "Can you service properties near Westfield?", answer: "Absolutely. We regularly work in the White City and Shepherd's Bush areas, including modern apartments near Westfield and Victorian properties throughout the neighborhood." },
          { question: "Do you offer boiler servicing plans?", answer: "Yes, we provide annual boiler servicing plans for Hammersmith & Fulham residents, helping you maintain efficiency and catch problems early." }
        ]
      },
      {
        slug: "southwark",
        name: "Southwark",
        borough: "London Borough of Southwark",
        metaTitle: "Southwark Plumber | Emergency Plumber Bermondsey, London Bridge & Peckham",
        metaDescription: "Professional plumbers in Southwark - Bermondsey, London Bridge, Peckham, Camberwell & Dulwich. Gas Safe engineers. Fast emergency response. Call 020 1234 5678 for same-day service.",
        heroTitle: "Trusted Plumbers in Southwark",
        heroSubtitle: "Fast Response to Bermondsey, London Bridge & Peckham",
        introText: "Southwark's rapidly developing landscape includes everything from historic Borough Market to modern riverside apartments and Victorian terraces in Dulwich. Our versatile team handles all property types with equal expertise.",
        landmarkText: "Serving areas near the Shard, Tower Bridge, and the regenerated zones around Elephant & Castle. We know Southwark inside out, from Rotherhithe to Dulwich Village.",
        servicesEmphasis: "New-build apartment plumbing, Victorian terrace renovations, commercial kitchen installations, and high-rise water pressure solutions. Perfect for Southwark's dynamic mix of old and new properties.",
        emergencyResponse: "40-minute average response to Southwark postcodes (SE1, SE5, SE15, SE16, SE21, SE22). Round-the-clock emergency service.",
        testimonialAuthor: "Lisa Chen",
        testimonialText: "Excellent bathroom fitting in our Bermondsey flat. Professional team, great attention to detail, and finished on time. Very happy with the quality of work.",
        testimonialService: "Bathroom Renovation",
        faqs: [
          { question: "Do you work on high-rise buildings near London Bridge?", answer: "Yes, we're experienced with high-rise plumbing systems, including the modern towers around London Bridge and Bankside, handling pressurized water systems and complex drainage." },
          { question: "Can you help with plumbing for commercial kitchens in Borough?", answer: "Absolutely. We install and maintain commercial kitchen plumbing throughout Southwark, including the busy restaurant district around Borough Market." },
          { question: "Do you service Victorian properties in Dulwich?", answer: "Yes, we regularly work on Victorian and Edwardian properties in Dulwich, Herne Hill, and Camberwell, providing sympathetic renovations and modern upgrades." }
        ]
      },
      {
        slug: "lambeth",
        name: "Lambeth",
        borough: "London Borough of Lambeth",
        metaTitle: "Lambeth Plumber | Emergency Plumber Brixton, Clapham & Streatham 24/7",
        metaDescription: "Reliable plumbers in Lambeth - Brixton, Clapham, Streatham, Kennington & Vauxhall. Gas Safe registered. Emergency repairs, boiler installation, bathrooms. Call 020 1234 5678 now!",
        heroTitle: "Professional Plumbing in Lambeth",
        heroSubtitle: "Expert Service for Brixton, Clapham, Streatham & Waterloo",
        introText: "Lambeth's diverse communities deserve reliable plumbing services. From converted flats in Brixton to family homes in Streatham Hill, our local team provides fast, professional service across all property types.",
        landmarkText: "We serve the entire borough from Waterloo to Streatham, including the vibrant areas around Brixton Market, Clapham Common, and the South Bank cultural quarter.",
        servicesEmphasis: "Flat conversion plumbing, period property restoration, eco-friendly boiler installations, and emergency leak detection. We understand Lambeth's mix of Victorian houses, modern flats, and purpose-built estates.",
        emergencyResponse: "35-minute average response to Lambeth postcodes (SW2, SW4, SW8, SW9, SW16, SE1, SE11, SE27). 24/7 emergency plumbers on standby.",
        testimonialAuthor: "David Wilson",
        testimonialText: "Called them out for a boiler emergency in Clapham. Engineer arrived within 45 minutes on a Sunday evening and got our heating working. Brilliant emergency service!",
        testimonialService: "Emergency Boiler Repair",
        faqs: [
          { question: "Do you serve the South Bank area?", answer: "Yes, we provide plumbing services throughout the South Bank, Waterloo, and Kennington areas, including residential and commercial properties." },
          { question: "Can you work on converted Victorian houses in Brixton?", answer: "Absolutely. We specialize in Victorian conversions throughout Lambeth, handling multi-flat systems, separate metering, and period property challenges." },
          { question: "What's your response time for Streatham emergencies?", answer: "We typically reach Streatham within 40-45 minutes for emergency callouts, with our local team on call 24/7." }
        ]
      },
      {
        slug: "wandsworth",
        name: "Wandsworth",
        borough: "London Borough of Wandsworth",
        metaTitle: "Wandsworth Plumber | Emergency Plumber Battersea, Putney & Tooting 24/7",
        metaDescription: "Expert plumbers in Wandsworth - Battersea, Putney, Tooting, Clapham Junction & Balham. Gas Safe certified. Fast emergency service, boilers, bathrooms. Call 020 1234 5678 today!",
        heroTitle: "Reliable Plumbers in Wandsworth",
        heroSubtitle: "Serving Battersea, Putney, Tooting & Clapham Junction",
        introText: "Wandsworth's family-friendly neighborhoods and riverside apartments require dependable plumbing services. From the terraced streets of Tooting to luxury developments along the Thames, we provide comprehensive solutions for all property types.",
        landmarkText: "Local to Battersea Park, Putney Bridge, and Wandsworth Common. We serve the entire borough including Balham, Earlsfield, and the vibrant Clapham Junction area.",
        servicesEmphasis: "Family home plumbing upgrades, multi-bathroom installations, garden tap installations, and water softener systems. We're experts in Wandsworth's Edwardian and Victorian properties plus modern riverside developments.",
        emergencyResponse: "30-minute average response to Wandsworth postcodes (SW11, SW12, SW15, SW17, SW18). Emergency service available 24/7.",
        testimonialAuthor: "Rachel Anderson",
        testimonialText: "Fantastic bathroom renovation in our Putney home. From design consultation to final fitting, everything was handled professionally. Would highly recommend to anyone in Wandsworth.",
        testimonialService: "Complete Bathroom Installation",
        faqs: [
          { question: "Do you install outside taps for gardens in Wandsworth?", answer: "Yes, we regularly install garden taps and outside water points for homes throughout Wandsworth - popular for the area's many family houses with gardens." },
          { question: "Can you handle plumbing for riverside properties?", answer: "Absolutely. We're experienced with riverside apartments in Battersea and Putney, including flood prevention measures and water pressure management." },
          { question: "Do you offer family-friendly service times?", answer: "Yes, we can schedule work around school runs and family routines, understanding the needs of Wandsworth's many family households." }
        ]
      },
      {
        slug: "richmond",
        name: "Richmond upon Thames",
        borough: "London Borough of Richmond upon Thames",
        metaTitle: "Richmond Plumber | Emergency Plumber Richmond, Twickenham & Kew 24/7",
        metaDescription: "Professional plumbers in Richmond upon Thames - Richmond, Twickenham, Kew, Barnes & Mortlake. Gas Safe registered. Boilers, bathrooms, heating. Call 020 1234 5678 for expert service.",
        heroTitle: "Expert Plumbing in Richmond upon Thames",
        heroSubtitle: "Premium Service for Richmond, Twickenham, Kew & Barnes",
        introText: "Richmond's riverside location and prestigious properties demand expert plumbing care. From period homes in Kew to modern developments along the Thames Path, our team delivers quality workmanship throughout this beautiful borough.",
        landmarkText: "Serving areas near Richmond Park, Kew Gardens, and the Thames riverside. We cover Richmond Hill, Twickenham Green, Barnes Common, and all surrounding neighborhoods.",
        servicesEmphasis: "Flood-resilient plumbing, luxury bathroom design, heritage property care, boiler installations for large family homes, and garden irrigation systems. Perfect for Richmond's mix of substantial family houses and riverside properties.",
        emergencyResponse: "35-minute average response across Richmond borough (TW9, TW10, TW1, TW2, SW13, SW14). 24/7 emergency coverage.",
        testimonialAuthor: "Henry Thompson",
        testimonialText: "Outstanding service for our Richmond home. They installed a new boiler system efficiently and explained everything clearly. True professionals who respect your property.",
        testimonialService: "Boiler System Installation",
        faqs: [
          { question: "Do you install flood prevention plumbing systems?", answer: "Yes, given Richmond's riverside location, we're experienced with flood-resistant plumbing solutions, including backflow preventers and flood-proof installations." },
          { question: "Can you work on large period properties in Richmond Hill?", answer: "Absolutely. We regularly service substantial period homes throughout Richmond, handling complex heating systems, multiple bathrooms, and heritage building requirements." },
          { question: "Do you install garden irrigation systems?", answer: "Yes, we install outdoor plumbing including garden irrigation, water features, and outside kitchen facilities - popular in Richmond's many homes with generous gardens." }
        ]
      },
      {
        slug: "ealing",
        name: "Ealing",
        borough: "London Borough of Ealing",
        metaTitle: "Ealing Plumber | Emergency Plumber Acton, Ealing & Hanwell 24/7 Service",
        metaDescription: "Trusted plumbers in Ealing - Ealing Broadway, Acton, Hanwell, Northolt & Greenford. Gas Safe engineers. Emergency repairs, boiler service, bathrooms. Call 020 1234 5678 now!",
        heroTitle: "Dependable Plumbers in Ealing",
        heroSubtitle: "Quality Service for Ealing, Acton, Hanwell & Northolt",
        introText: "Ealing's 'Queen of the Suburbs' reputation is built on solid family homes and community spirit. Our plumbing services match this standard, providing reliable, honest service to households across the borough.",
        landmarkText: "We serve all areas from Ealing Common to Northolt, including the shopping districts of Ealing Broadway and the residential streets around Walpole Park and Pitshanger Lane.",
        servicesEmphasis: "Family home heating systems, bathroom modernization for Edwardian properties, water efficiency upgrades, and loft bathroom installations. We're experts in Ealing's characteristic 1930s semi-detached and Edwardian terrace houses.",
        emergencyResponse: "40-minute average response to Ealing postcodes (W5, W7, W13, UB6). 24/7 emergency plumbing service available.",
        testimonialAuthor: "Sophie Martinez",
        testimonialText: "Great experience with our heating system upgrade in Ealing. Professional, punctual, and reasonably priced. They cleaned up thoroughly and explained everything. Very satisfied.",
        testimonialService: "Heating System Upgrade",
        faqs: [
          { question: "Do you work on 1930s semi-detached houses?", answer: "Yes, we're very familiar with Ealing's characteristic 1930s housing stock and the specific plumbing considerations for these homes, including pipe layouts and heating systems." },
          { question: "Can you install water-saving devices?", answer: "Absolutely. We can install water-efficient toilets, taps, and shower systems throughout your Ealing home, helping reduce bills and environmental impact." },
          { question: "Do you service the Northolt and Greenford areas?", answer: "Yes, we cover the entire Ealing borough including Northolt, Greenford, Hanwell, and Perivale with the same fast, professional service." }
        ]
      },
      {
        slug: "tower-hamlets",
        name: "Tower Hamlets",
        borough: "London Borough of Tower Hamlets",
        metaTitle: "Tower Hamlets Plumber | Emergency Plumber Canary Wharf, Bethnal Green 24/7",
        metaDescription: "Professional plumbers in Tower Hamlets - Canary Wharf, Bethnal Green, Bow, Poplar & Whitechapel. High-rise specialists. Gas Safe certified. Call 020 1234 5678 for fast service!",
        heroTitle: "Modern Plumbing Solutions in Tower Hamlets",
        heroSubtitle: "Expert Service for Canary Wharf, Bethnal Green & Bow",
        introText: "Tower Hamlets' dramatic transformation from historic East End to modern financial hub means we handle everything from Victorian terraces in Bethnal Green to state-of-the-art high-rises in Canary Wharf.",
        landmarkText: "Serving areas from the Tower of London to Olympic Park, including Brick Lane, Canary Wharf, Victoria Park, and Mile End. We know every corner of this dynamic borough.",
        servicesEmphasis: "High-rise plumbing systems, pressurized water installations, modern apartment complexes, and heritage East End properties. We're experts in both cutting-edge developments and traditional housing stock.",
        emergencyResponse: "35-minute average response to Tower Hamlets (E1, E2, E3, E14). 24/7 emergency service for residential and commercial properties.",
        testimonialAuthor: "Alex Kumar",
        testimonialText: "Needed urgent plumbing work in our Canary Wharf apartment. The engineer understood the high-rise system perfectly and fixed the issue efficiently. Professional service for modern buildings.",
        testimonialService: "High-Rise Plumbing Repair",
        faqs: [
          { question: "Do you specialize in high-rise buildings?", answer: "Yes, we're highly experienced with high-rise plumbing systems in Canary Wharf and across Tower Hamlets, including pressurized systems, complex drainage, and luxury apartment installations." },
          { question: "Can you work on Victorian properties in Bethnal Green?", answer: "Absolutely. We regularly work on Victorian and Edwardian properties throughout Bethnal Green, Bow, and Mile End, providing sympathetic upgrades while preserving period features." },
          { question: "Do you service commercial properties in Canary Wharf?", answer: "Yes, we provide commercial plumbing services for offices, restaurants, and retail spaces throughout the business district." }
        ]
      },
      {
        slug: "lewisham",
        name: "Lewisham",
        borough: "London Borough of Lewisham",
        metaTitle: "Lewisham Plumber | Emergency Plumber Catford, Deptford & Blackheath 24/7",
        metaDescription: "Reliable plumbers in Lewisham - Catford, Deptford, Blackheath, Forest Hill & Brockley. Gas Safe registered. Emergency repairs, boilers, bathrooms. Call 020 1234 5678 for fast service!",
        heroTitle: "Local Plumbers in Lewisham",
        heroSubtitle: "Fast Response to Catford, Deptford, Blackheath & Forest Hill",
        introText: "Lewisham's diverse neighborhoods from historic Blackheath to bustling Catford require versatile plumbing expertise. Our local team provides reliable service across all property types and all areas of the borough.",
        landmarkText: "Covering all of Lewisham from Deptford Creek to the edges of Crystal Palace, including Blackheath Village, Forest Hill, and the regenerated areas around Lewisham town center.",
        servicesEmphasis: "Victorian terrace plumbing, flat conversion systems, boiler replacements for family homes, and bathroom renovations. We understand Lewisham's mix of period properties, inter-war housing, and modern developments.",
        emergencyResponse: "45-minute average response to Lewisham postcodes (SE4, SE6, SE8, SE13, SE14, SE23). 24/7 emergency plumbers available.",
        testimonialAuthor: "Natalie Brown",
        testimonialText: "Excellent service for our boiler replacement in Forest Hill. The team was professional, tidy, and completed everything in one day. Great value and quality work.",
        testimonialService: "Boiler Replacement",
        faqs: [
          { question: "Do you cover all of Lewisham borough?", answer: "Yes, we serve the entire borough including Catford, Deptford, Blackheath, Forest Hill, Brockley, New Cross, Hither Green, and Sydenham." },
          { question: "Can you help with period property plumbing in Blackheath?", answer: "Absolutely. We're experienced with Blackheath's beautiful period properties, providing careful renovations that respect architectural heritage while adding modern conveniences." },
          { question: "Do you offer payment plans for large jobs?", answer: "Yes, we can discuss flexible payment options for larger projects like full bathroom installations or complete heating system replacements." }
        ]
      },
      {
        slug: "brent",
        name: "Brent",
        borough: "London Borough of Brent",
        metaTitle: "Brent Plumber | Emergency Plumber Wembley, Kilburn & Willesden 24/7",
        metaDescription: "Professional plumbers in Brent - Wembley, Kilburn, Willesden, Harlesden & Neasden. Gas Safe certified. Fast emergency response. Boilers, leaks, bathrooms. Call 020 1234 5678!",
        heroTitle: "Trusted Plumbing Services in Brent",
        heroSubtitle: "Serving Wembley, Kilburn, Willesden & Harlesden",
        introText: "Brent's culturally rich neighborhoods deserve plumbing services that match the community spirit. From Wembley Stadium's shadow to the residential streets of Queen's Park, we provide honest, reliable service throughout the borough.",
        landmarkText: "We serve all areas from Wembley Stadium to Kilburn High Road, including Willesden Green, Harlesden, Kensal Rise, and the increasingly popular areas around Dollis Hill and Neasden.",
        servicesEmphasis: "Multi-occupancy property plumbing, boiler installations for family homes, bathroom renovations, and emergency leak repairs. Perfect for Brent's mix of Victorian conversions, 1930s housing, and modern developments.",
        emergencyResponse: "40-minute average response to Brent postcodes (NW6, NW10, HA0, HA9). Round-the-clock emergency service available.",
        testimonialAuthor: "Mohammed Ahmed",
        testimonialText: "Very happy with the central heating installation in our Wembley home. Professional team, fair price, and excellent workmanship. Would definitely recommend to neighbors.",
        testimonialService: "Central Heating Installation",
        faqs: [
          { question: "Do you work in HMOs and multi-occupancy properties?", answer: "Yes, we're experienced with Houses in Multiple Occupation throughout Brent, handling multiple bathrooms, separate meters, and landlord compliance requirements." },
          { question: "Can you service properties near Wembley Stadium?", answer: "Absolutely. We regularly work in the Wembley area, including the new developments and established residential streets around the stadium." },
          { question: "Do you offer landlord services in Brent?", answer: "Yes, we provide landlord services including annual gas safety certificates, emergency callouts, and property maintenance contracts for rental properties throughout Brent." }
        ]
      },
      {
        slug: "bromley",
        name: "Bromley",
        borough: "London Borough of Bromley",
        metaTitle: "Bromley Plumber | Emergency Plumber Beckenham, Orpington & Penge 24/7",
        metaDescription: "Expert plumbers in Bromley - Beckenham, Orpington, Penge, Chislehurst & Bromley Town. Gas Safe registered. Emergency repairs, boiler service, bathrooms. Call 020 1234 5678 now!",
        heroTitle: "Professional Plumbers in Bromley",
        heroSubtitle: "Quality Service for Beckenham, Orpington, Penge & Chislehurst",
        introText: "As London's largest borough, Bromley's suburban character and family homes require dependable plumbing services. From Orpington to Crystal Palace, we provide comprehensive solutions for all property types.",
        landmarkText: "Serving the entire borough from Penge to the edge of Kent, including Beckenham, Bromley town center, Chislehurst, and the green spaces of Hayes and West Wickham.",
        servicesEmphasis: "Suburban family home specialists, garden plumbing, garage bathroom installations, and heating systems for larger properties. We understand Bromley's characteristic detached and semi-detached houses with gardens.",
        emergencyResponse: "45-minute average response across Bromley (BR1, BR2, BR3, BR5, BR6, SE19, SE20). 24/7 emergency plumbers on call.",
        testimonialAuthor: "Catherine Williams",
        testimonialText: "Wonderful service for our bathroom and shower room installation in Beckenham. They project-managed everything perfectly and the finish is outstanding. Highly recommend for Bromley homes.",
        testimonialService: "Multi-Bathroom Installation",
        faqs: [
          { question: "Do you cover the whole of Bromley borough?", answer: "Yes, we serve all areas of Bromley including Orpington, Beckenham, Penge, Chislehurst, Hayes, West Wickham, and everywhere in between." },
          { question: "Can you install outside taps and garden water features?", answer: "Absolutely. We regularly install garden taps, irrigation systems, and water features for Bromley's many family homes with gardens." },
          { question: "Do you work on larger family homes?", answer: "Yes, we're experienced with Bromley's substantial family properties, handling multiple bathrooms, large heating systems, and complex plumbing requirements." }
        ]
      }
    ];

    locationData.forEach((data) => {
      const id = randomUUID();
      const page: LocationPage = { ...data, id, faqs: data.faqs as Array<{ question: string; answer: string }> };
      this.locationPages.set(data.slug, page);
    });
  }

  async getLocationPage(slug: string): Promise<LocationPage | undefined> {
    return this.locationPages.get(slug);
  }

  async getAllLocationPages(): Promise<LocationPage[]> {
    return Array.from(this.locationPages.values());
  }
}

export const storage = new MemStorage();
