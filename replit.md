# Bradford Plumbing Directory

## Overview

This is a full-stack web application for finding and browsing local plumbers in Bradford, UK. The application provides a searchable directory of plumbing businesses with detailed profiles, ratings, service areas, and contact information. Built with React (Vite) on the frontend and Express.js on the backend, it features a modern UI using shadcn/ui components and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables

**Design Decisions:**
- **Component-based architecture** with reusable UI components in `/client/src/components`
- **Type-safe development** using TypeScript with shared types between frontend and backend
- **Modern styling approach** using CSS variables for theming (supports light/dark modes)
- **Responsive design** with mobile-first approach using Tailwind breakpoints
- **Path aliases** configured for clean imports (`@/`, `@shared/`, `@assets/`)

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon serverless PostgreSQL (@neondatabase/serverless)
- **Language**: TypeScript with ESM modules
- **Build Tool**: esbuild for production bundling

**Design Decisions:**
- **RESTful API** design with endpoints under `/api/*` prefix
- **In-memory storage fallback** (MemStorage class) for development/testing before database is fully configured
- **Shared schema** between frontend and backend located in `/shared/schema.ts`
- **Type-safe validation** using Zod schemas generated from Drizzle schemas
- **Middleware pattern** for request logging and JSON parsing with raw body preservation

**API Endpoints:**
- `GET /api/plumbers` - Retrieve all plumbers
- `GET /api/plumbers/search` - Search plumbers with query parameters (query, area, service)
- `GET /api/plumbers/:id` - Get single plumber details

### Data Storage

**Database Schema:**
The `plumbers` table contains:
- `id` (varchar, primary key)
- Business information (businessName, phone, mobile, email, address)
- Rating metrics (rating, reviewCount)
- Service details (serviceAreas, services as JSONB arrays)
- Business attributes (is24_7, isGasSafe, isVerified as text flags)
- Operating hours (openingHours as JSONB object)

**Design Decisions:**
- **PostgreSQL with Drizzle ORM** chosen for type-safe database queries and migrations
- **JSONB fields** for flexible array storage (serviceAreas, services) and structured data (openingHours)
- **Text-based boolean flags** (e.g., "true"/"false" strings) for compatibility
- **Dual storage implementation** with MemStorage for development and database for production

### External Dependencies

**Core Libraries:**
- **@neondatabase/serverless** - Serverless PostgreSQL database connection
- **drizzle-orm** & **drizzle-kit** - Type-safe ORM and migration toolkit
- **@tanstack/react-query** - Server state management and caching
- **wouter** - Lightweight routing library
- **react-hook-form** with **@hookform/resolvers** - Form handling with Zod validation

**UI Component Libraries:**
- **@radix-ui/* packages** - Accessible, unstyled UI primitives (35+ components)
- **shadcn/ui** - Pre-built component system using Radix UI
- **lucide-react** - Icon library
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** & **clsx** - Dynamic className handling

**Development Tools:**
- **Vite plugins** for Replit integration (@replit/vite-plugin-*)
- **tsx** - TypeScript execution for development
- **esbuild** - Fast bundling for production

**Notable Design Patterns:**
- **CSS-in-JS via CSS Variables** for dynamic theming
- **Component composition** using Radix UI Slot for flexible component APIs
- **Query key-based caching** with React Query for efficient data fetching
- **Middleware-based logging** for API request tracking