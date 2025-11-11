# London Plumbing Services

## Overview

This is a professional one-page business website for London Plumbing Services, a plumbing service company serving the entire London area, UK. The site showcases plumbing services, service areas, and contact information in a clean, modern design with a blue color scheme. Built with React (Vite) on the frontend and Express.js on the backend, it features a modern UI using shadcn/ui components and Tailwind CSS.

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
- **Static informational site** with no backend API endpoints required
- **Express.js serves the Vite frontend** for development and production
- **Component-based layout** with Header, Footer, and Home page sections
- **Contact information** displayed prominently with phone, email, and service area details
- **Blue color scheme** reflecting plumbing services branding

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