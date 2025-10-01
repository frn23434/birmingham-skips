import { pgTable, text, varchar, real, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const plumbers = pgTable("plumbers", {
  id: varchar("id").primaryKey(),
  businessName: text("business_name").notNull(),
  phone: text("phone").notNull(),
  mobile: text("mobile"),
  email: text("email").notNull(),
  address: text("address").notNull(),
  rating: real("rating").notNull().default(0),
  reviewCount: real("review_count").notNull().default(0),
  serviceAreas: jsonb("service_areas").$type<string[]>().notNull(),
  services: jsonb("services").$type<string[]>().notNull(),
  description: text("description").notNull(),
  is24_7: text("is_24_7").notNull().default("false"),
  isGasSafe: text("is_gas_safe").notNull().default("false"),
  isVerified: text("is_verified").notNull().default("false"),
  openingHours: jsonb("opening_hours").$type<{
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  }>(),
});

export const insertPlumberSchema = createInsertSchema(plumbers).omit({
  id: true,
});

export type InsertPlumber = z.infer<typeof insertPlumberSchema>;
export type Plumber = typeof plumbers.$inferSelect;
