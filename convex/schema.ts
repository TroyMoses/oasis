import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    passwordHash: v.string(),
    isAdmin: v.boolean(),
    createdAt: v.number(),
    lastLogin: v.optional(v.number()),
  }).index("by_username", ["username"]),
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    isRead: v.boolean(),
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
    status: v.optional(v.string()),
    createdAt: v.number(),
  }),
  testimonials: defineTable({
    name: v.string(),
    role: v.string(),
    content: v.string(),
    storageId: v.string(),
    isVisible: v.optional(v.boolean()),
    createdAt: v.number(),
  }),
  sessions: defineTable({
    userId: v.id("users"),
    token: v.string(),
    expiresAt: v.number(),
    createdAt: v.number(),
  }).index("by_token", ["token"]),
});
