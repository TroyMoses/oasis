import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const create = mutation({
  args: {
    name: v.string(),
    role: v.string(),
    content: v.string(),
    avatar: v.string(),
  },
  handler: async (ctx, args) => {
    const testimonialId = await ctx.db.insert("testimonials", {
      ...args,
      createdAt: Date.now(),
    })
    return testimonialId
  },
})

export const list = query({
  handler: async (ctx) => {
    const testimonials = await ctx.db.query("testimonials").order("desc").collect()
    return testimonials
  },
})

