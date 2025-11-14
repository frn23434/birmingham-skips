import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all plumbers
  app.get("/api/plumbers", async (_req, res) => {
    const plumbers = await storage.getAllPlumbers();
    res.json(plumbers);
  });

  // Search plumbers
  app.get("/api/plumbers/search", async (req, res) => {
    const { query, area, service } = req.query;
    const plumbers = await storage.searchPlumbers(
      query as string,
      area as string,
      service as string
    );
    res.json(plumbers);
  });

  // Get single plumber
  app.get("/api/plumbers/:id", async (req, res) => {
    const plumber = await storage.getPlumber(req.params.id);
    if (!plumber) {
      return res.status(404).json({ message: "Plumber not found" });
    }
    res.json(plumber);
  });

  // Get all location pages
  app.get("/api/locations", async (_req, res) => {
    const locations = await storage.getAllLocationPages();
    res.json(locations);
  });

  // Get single location page by slug
  app.get("/api/locations/:slug", async (req, res) => {
    const location = await storage.getLocationPage(req.params.slug);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.json(location);
  });

  const httpServer = createServer(app);
  return httpServer;
}
