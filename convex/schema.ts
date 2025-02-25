import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),
  appointments: defineTable({
    service: v.string(),
    date: v.string(),
    time: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    note: v.optional(v.string()),
    amount: v.number(),
    createdAt: v.number(),
  }),
  testimonials: defineTable({
    name: v.string(),
    role: v.string(),
    content: v.string(),
    avatar: v.string(),
    createdAt: v.number(),
  }),
});
