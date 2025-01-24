import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),
})

